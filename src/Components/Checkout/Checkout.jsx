import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../Provider/AuthProvider";
import styles from './Checkout.module.scss';
import UserData from "./UserData/UserData";

const Checkout = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    useEffect(()=> {
        if(!auth) navigate({
            pathname: "/login",
            search: "redirect=checkout",
        })
    }, [])

    return ( 
        <main className={styles.container}>
            <section></section>
            <UserData auth={auth} />
        </main>
     );
}
 
export default Checkout;