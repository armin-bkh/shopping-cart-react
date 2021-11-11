import Footer from "../Components/Footer/Footer";
import Navigation from "../Components/Navigation/Navigation";
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main className={styles.maxHScreen}>{children}</main>
      <Footer/>
    </>
  );
};

export default Layout;
