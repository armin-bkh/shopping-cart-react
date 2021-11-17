import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../Provider/AuthProvider";
import { useCart } from "../../Provider/CartProvider";
import CartList from "../Cart/CartList/CartList";
import styles from './Checkout.module.scss';
import UserData from "./UserData/UserData";

const Checkout = () => {
    const { cart } = useCart();
    const auth = useAuth();
    const navigate = useNavigate();

    useEffect(()=> {
        if(!auth) navigate({
            pathname: "/login",
            search: "redirect=checkout",
        })
        if(!cart.length) navigate("/", { replace: true })
    }, [])

    return ( 
        <main className={styles.container}>
            <section>
                <CartList disable />
            </section>
            <UserData auth={auth} />
        </main>
     );
}
 
export default Checkout;