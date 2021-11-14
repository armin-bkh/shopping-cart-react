import HomePage from '../Pages/HomePage';
import CartPage from '../Pages/CartPage';
import CheckoutPage from '../Pages/CheckoutPage';
import LoginPage from '../Pages/loginPage';
import SignupPage from '../Pages/SignupPage';

export const routes = [
    {path: "/", element: <HomePage /> },
    {path: "/cart", element: <CartPage /> },
    {path: "/checkout", element: <CheckoutPage /> },
    {path: "/login", element: <LoginPage /> },
    {path: "/signup", element: <SignupPage /> },
]