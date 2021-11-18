import { Link } from "react-router-dom";
import { useAuth } from "../../../Provider/AuthProvider";
import { useCart } from "../../../Provider/CartProvider";
import originalTotalPrice from "../../Utils/originalTotalPrice";
import styles from "./CartSummery.module.scss";

const CartSummery = () => {
  const auth = useAuth();
  const { cart, totalPrice } = useCart();
  
  return (
    <section className={styles.cartSummery}>
      <h1 className="headers">Cart summery</h1>
      <article className={`title ${styles.cartDetail}`}>
        <p>original total price: </p>
        <span className={"main"}>${originalTotalPrice(cart)}</span>
      </article>
      <article className={`title ${styles.cartDetail}`}>
        <p>cart discount: </p>
        <span className={"main"}>${originalTotalPrice(cart) - totalPrice}</span>
      </article>
      <article className={`title ${styles.cartDetail}`}>
        <p>net cart price: </p>
        <span className={"main"}>${totalPrice}</span>
      </article>

      <Link
        to={
          auth
            ? "/checkout"
            : { pathname: "/login", search: "redirect=checkout" }
        }
        className={`title ${styles.checkout}`}
      >
        go to checkout
      </Link>
    </section>
  );
};

export default CartSummery;
