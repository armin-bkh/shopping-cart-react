import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

const navigation = [
    { to: "/", title: "home" },
    { to: "/cart", title: "cart" },
];

const Navigation = () => {
  return (
    <header>
      <nav>
        <ul className={styles.navBar}>
          {navigation.map((nav) => (
            <li key={nav.to}>
              <NavLink
                className={(link) =>
                  link.isActive ? styles.active : styles.navItem
                }
                to={nav.to}
              >
                {nav.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
