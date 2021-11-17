import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";
import { AiFillHome } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useCart } from "../../Provider/CartProvider";
import { BiLogInCircle } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { useAuth } from "../../Provider/AuthProvider";

const navigation = [
  { to: "/", title: "home", icon: <AiFillHome /> },
  { to: "/cart", title: "cart", icon: <HiOutlineShoppingCart /> },
  { to: "/login", title: "login", icon: <BiLogInCircle /> },
];

const logedInNavigation = [
  { to: "/", title: "home", icon: <AiFillHome /> },
  { to: "/cart", title: "cart", icon: <HiOutlineShoppingCart /> },
  { to: "/profile", title: "profile", icon: <FaUserAlt /> },
];

const Navigation = () => {
  const auth = useAuth();
  const { cart } = useCart();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navBar}>
          {auth
            ? logedInNavigation.map((nav) => (
              <li
                  key={nav.to}
                  style={nav.to === "/profile" ? { marginLeft: "auto" } : null}
                >
                  <NavLink
                    className={({ isActive }) =>
                      `headers ${styles.navItem} ` +
                      (isActive ? styles.active : "")
                    }
                    to={nav.to}
                  >
                    <span className={styles.icon}>{nav.icon}</span>
                    {nav.title}
                    {nav.to === "/cart" && cart.length > 0 && cart.length}
                  </NavLink>
                </li>
            ))
            : navigation.map((nav) => (
                <li
                  key={nav.to}
                  style={nav.to === "/login" ? { marginLeft: "auto" } : null}
                >
                  <NavLink
                    className={({ isActive }) =>
                      `headers ${styles.navItem} ` +
                      (isActive ? styles.active : "")
                    }
                    to={nav.to}
                  >
                    <span className={styles.icon}>{nav.icon}</span>
                    {nav.title}
                    {nav.to === "/cart" && cart.length > 0 && cart.length}
                  </NavLink>
                </li>
              ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
