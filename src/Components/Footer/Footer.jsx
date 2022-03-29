import styles from "./Footer.module.scss";
import {
  FaTelegramPlane,
  FaLinkedin,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const nav = [
  { icon: <FaTelegramPlane />, href: "https://t.me/Ar921dvl" },
  { icon: <FaLinkedin />, href: "https:www.linkedin.com/in/arminbkh" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/rminbkh" },
  { icon: <FaTwitterSquare />, href: "http://twitter.com/arminbkh" },
];

const Footer = () => {
  return (
    <footer
      className={`flex flex-col justify-center items-center bg-transparent text-emerald-300 pt-20 pb-10`}
    >
      <h3 className={`iconTxt text-xl md:text-4xl text-red-400`}>
        Armin bakhshi
      </h3>
      <nav className={`w-full mt-10`}>
        <ul className={`flex items-center justify-evenly`}>
          {nav.map((item) => (
            <li
              key={item.href}
              className="flex items-center justify-evenly transition-all duration-500 cursor-pointer w-12 h-12 rounded-full hover:bg-emerald-100"
            >
              <a
                target="_blank"
                href={item.href}
                className={`transition-all text-xl md:text-2xl`}
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
