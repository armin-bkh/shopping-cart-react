import Navigation from "../Components/Navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
};

export default Layout;
