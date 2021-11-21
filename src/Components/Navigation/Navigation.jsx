import { useState } from "react";
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
  const [isShow, setIsShow] = useState(false);
  const auth = useAuth();
  const { cart } = useCart();

  return (
    <header className={`sticky top-0 bg-gray-900 text-white py-5 px-4`}>
      <ul className={`flex justify-between items-center`}>
        <li className={`z-50`}>
          <button
            type="button"
            onClick={() => setIsShow((prevIsShow) => !prevIsShow)}
          >
            <div
              className={`h-1 w-8 rounded-md bg-white ${isShow && "hidden"}`}
            ></div>
            <div
              className={`w-8 bg-white my-2 transition-all
             ${isShow ? "h-8 rounded-full my-0" : "h-1  my-2 rounded-md"}`}
            ></div>
            <div
              className={`h-1 w-8 rounded-md bg-white ${isShow && "hidden"}`}
            ></div>
          </button>
        </li>
        <li>
          <h1 className={`iconTxt`}>Armin</h1>
        </li>
        <li>
          <NavLink className={`relative`} to="/cart">
            <HiOutlineShoppingCart />
            <span
              className={`absolute text-xs w-4 h-4 flex justify-center items-center bg-blue-600 rounded-full -top-4 -right-5`}
            >
              {cart.length}
            </span>
          </NavLink>
        </li>
      </ul>
      <nav
        className={`fixed h-screen transition-all backdrop-blur-xl z-10 bg-opacity-70 
        bg-gray-900 text-white left-0 w-full flex justify-center items-center ${
          isShow ? "top-0" : "-top-full"
        }`}
      >
        <ul className={`flex flex-col`}>
          {auth
            ? logedInNavigation.map((nav) => (
                <li
                  key={nav.to}
                  style={nav.to === "/profile" ? { marginLeft: "auto" } : null}
                >
                  <NavLink
                    className={({ isActive }) =>
                      `headers flex items-center py-4 px-3 rounded-tr-xl rounded-bl-xl` +
                      (isActive ? " bg-gray-900" : "")
                    }
                    to={nav.to}
                  >
                    <span className={`mr-3`}>{nav.icon}</span>
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
