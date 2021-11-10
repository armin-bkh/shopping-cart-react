import Navigation from "../Components/Navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <footer>footer</footer>
    </>
  );
};

export default Layout;
