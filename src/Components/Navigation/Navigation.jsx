import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdOutlineFeaturedPlayList } from 'react-icons/md';
import { useCart } from "../../Provider/CartProvider";
import { BiLogInCircle } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { useAuth } from "../../Provider/AuthProvider";

const navigation = [
  { to: "/", title: "home", icon: <AiFillHome /> },
  { to: "/products", title: "products", icon: <MdOutlineFeaturedPlayList /> },
  { to: "/cart", title: "cart", icon: <HiOutlineShoppingCart /> },
  { to: "/login", title: "login", icon: <BiLogInCircle /> },
];

const logedInNavigation = [
  { to: "/", title: "home", icon: <AiFillHome /> },
  { to: "/products", title: "products", icon: <MdOutlineFeaturedPlayList /> },
  { to: "/cart", title: "cart", icon: <HiOutlineShoppingCart /> },
  { to: "/profile", title: "profile", icon: <FaUserAlt /> },
];

const Navigation = () => {
  const [isShow, setIsShow] = useState(false);
  const auth = useAuth();
  const { cart } = useCart();

  return (
    <header className={`sticky top-0 bg-gray-900 text-white py-5 px-4 z-50`}>
      <ul className={`flex justify-between items-center`}>
        <li className={`z-50`}>
          <button
          className={`flex flex-col`}
            type="button"
            onClick={() => setIsShow((prevIsShow) => !prevIsShow)}
          >
            <div
              className={`h-1 rounded-md transition-all ${isShow ? "w-4 bg-yellow-400" : "w-8 bg-white"}`}
            ></div>
            <div
              className={`w-8 h-1 bg-white my-2 rounded-md`}
            ></div>
            <div
              className={`h-1 rounded-md transition-all self-end ${isShow ? "w-4 bg-yellow-400" : "w-8 bg-white"}`}
            ></div>
          </button>
        </li>
        <li>
          <h1 className={`iconTxt text-2xl text-yellow-400`}>Armin</h1>
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
                >
                  <NavLink
                    className={({ isActive }) =>
                      `headers flex items-center py-4 px-3 rounded-tr-xl rounded-bl-xl ` +
                      (isActive ? " bg-gray-900 text-yellow-400" : "")
                    }
                    to={nav.to}
                  >
                    <span className={`mr-3`}>{nav.icon}</span>
                    {nav.title}
                  </NavLink>
                </li>
              ))
            : navigation.map((nav) => (
                <li
                  key={nav.to}
                >
                  <NavLink
                    className={({ isActive }) =>
                      `headers flex items-center py-4 px-3 rounded-tr-xl rounded-bl-xl ` +
                      (isActive ? " bg-gray-900 text-yellow-400" : "")
                    }
                    to={nav.to}
                  >
                    <span className={`mr-3`}>{nav.icon}</span>
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
