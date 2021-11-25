import HomePage from '../Pages/HomePage';
import CartPage from '../Pages/CartPage';
import CheckoutPage from '../Pages/CheckoutPage';
import LoginPage from '../Pages/loginPage';
import SignupPage from '../Pages/SignupPage';
import ProfilePage from '../Pages/ProfilePage';
import NotFoundPage from '../Pages/NotFoundPage';
import ProductPage from '../Pages/ProductPage';
import ProductsPage from '../Pages/ProductsPage';

export const routes = [
    {path: "/", element: <HomePage /> },
    {path: "/cart", element: <CartPage /> },
    {path: "/checkout", element: <CheckoutPage /> },
    {path: "/login", element: <LoginPage /> },
    {path: "/signup", element: <SignupPage /> },
    {path: "/profile", element: <ProfilePage /> },
    {path: "/products/product-:id", element: <ProductPage /> },
    {path: "/products", element: <ProductsPage /> },
    {path: "*", element: <NotFoundPage /> },
]