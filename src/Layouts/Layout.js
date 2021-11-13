import Footer from "../Components/Footer/Footer";
import Navigation from "../Components/Navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
