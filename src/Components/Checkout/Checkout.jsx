import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useAuth } from "../../Provider/AuthProvider";
import { useCart } from "../../Provider/CartProvider";
import CartList from "../Cart/CartList/CartList";
import styles from "./Checkout.module.scss";
import UserData from "./UserData/UserData";

const Checkout = () => {
  const { cart } = useCart();
  const auth = useAuth();

  return (
    <main className={styles.container}>
      {auth ? (
        <>
          {!cart.length ? (
            <Link to="/">your cart is emptey</Link>
          ) : (
            <>
              <section>
                <CartList disable />
              </section>
              <UserData auth={auth} />
            </>
          )}
        </>
      ) : (
        <Link to={{ pathname: "/login", search: "redirect=checkout" }}>
          please login
        </Link>
      )}
    </main>
  );
};

export default Checkout;
