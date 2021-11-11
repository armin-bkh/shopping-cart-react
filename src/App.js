import { Route, Routes } from "react-router";
import { routes } from "./Routes/Routes";
import CartProvider from "./Provider/CartProvider";

const App = () => {
  return (
    <CartProvider>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.element} key={route.path} />
        ))}
        {/* <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<Cart />} /> */}
      </Routes>
    </CartProvider>
  );
};

export default App;
