import styles from './Footer.module.scss';
import { FaTelegramPlane, FaLinkedin, FaInstagram, FaTwitterSquare } from 'react-icons/fa';

const nav = [
    {icon: <FaTelegramPlane />, href:"https://t.me/Ar921dvl"},
    {icon: <FaLinkedin />, href:"https:www.linkedin.com/in/arminbkh"},
    {icon: <FaInstagram />, href:"https://www.instagram.com/rminbkh"},
    {icon: <FaTwitterSquare />, href:"http://twitter.com/arminbkh"},
];

const Footer = () => {
    return ( 
        <footer className={`flex flex-col justify-center items-center bg-gray-900 text-white pt-20 pb-10`}>
            <h3 className={`iconTxt text-xl md:text-4xl text-yellow-400`}>Armin bakhshi</h3>

            <nav className={`w-full mt-10`}>
                <ul className={`flex items-center justify-evenly`}>
                    {nav.map(item => <li key={item.href}><a target="_blank" href={item.href} className={`cursor-pointer hover:text-yellow-400 transition-all text-xl md:text-2xl`}>{item.icon}</a></li>)}
                </ul>
            </nav>
        </footer>
     );
}
 
export default Footer;