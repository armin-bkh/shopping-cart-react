import { Route, Routes } from "react-router";
import { routes } from "./Routes/Routes";
import CartProvider from "./Provider/CartProvider";
import { ToastProvider } from "react-toast-notifications";

const App = () => {
  return (
    <CartProvider>
      <ToastProvider autoDismiss={true} newestOnTop={true} placement="top-left" >
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.element} key={route.path} />
          ))}
          {/* <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<Cart />} /> */}
        </Routes>
      </ToastProvider>
    </CartProvider>
  );
};

export default App;
