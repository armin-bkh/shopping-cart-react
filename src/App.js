import { Route, Routes } from "react-router";
import { routes } from "./Routes/Routes";
import CartProvider from "./Provider/CartProvider";
import { ToastProvider } from "react-toast-notifications";
import AuthProvider from "./Provider/AuthProvider";

const App = () => {
  return (
    <CartProvider>
      <AuthProvider>
        <ToastProvider
          autoDismiss={true}
          newestOnTop={true}
          placement="top-right"
        >
          <Routes>
            {routes.map((route) => (
              <Route
                path={route.path}
                element={route.element}
                key={route.path}
              />
            ))}
            {/* <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<Cart />} /> */}
          </Routes>
        </ToastProvider>
      </AuthProvider>
    </CartProvider>
  );
};

export default App;
