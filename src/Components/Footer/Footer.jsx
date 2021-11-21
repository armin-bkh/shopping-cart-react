import styles from './Footer.module.scss';

const Footer = () => {
    return ( 
        <footer className={`flex justify-center items-center bg-gray-900 text-white py-20 ${styles.footer}`}>
            <h3 className={`iconTxt`}>Armin bakhshi</h3>
        </footer>
     );
}
 
export default Footer;