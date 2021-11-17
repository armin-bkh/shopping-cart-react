import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../Provider/AuthProvider";

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
        <main>
            <h1>checkout page</h1>
        </main>
     );
}
 
export default Checkout;