import HomePage from '../Pages/HomePage';
import CartPage from '../Pages/CartPage';
import CheckoutPage from '../Pages/CheckoutPage';

export const routes = [
    {path: "/", element: <HomePage /> },
    {path: "/cart", element: <CartPage /> },
    {path: "/checkout", element: <CheckoutPage /> },
]