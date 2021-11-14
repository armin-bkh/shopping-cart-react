import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";
import { AiFillHome } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useCart } from "../../Provider/CartProvider";

const navigation = [
  { to: "/", title: "home", icon: <AiFillHome /> },
  { to: "/cart", title: "cart", icon: <HiOutlineShoppingCart /> },
];

const Navigation = () => {
  const { cart } = useCart();

  return (
    <header>
      <nav className={styles.nav}>
        <h1 className={`iconTxt ${styles.title}`}>Armin shopping</h1>
        <ul className={styles.navBar}>
          {navigation.map((nav) => (
            <li key={nav.to}>
              <NavLink
                className={({ isActive }) =>
                  `headers ${styles.navItem} ` + (isActive ? styles.active : "")
                }
                to={nav.to}
              >
                <span className={styles.icon}>{nav.icon}</span>
                {nav.title} {nav.to === "/cart" && cart.length > 0 && cart.length}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
