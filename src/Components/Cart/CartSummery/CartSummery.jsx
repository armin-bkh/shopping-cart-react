import { Link } from "react-router-dom";
import { useCart } from "../../../Provider/CartProvider";
import styles from "./CartSummery.module.scss";

const CartSummery = () => {
  const { cart, totalPrice } = useCart();
  const originalTotalPrice = cart.length
    ? cart.reduce((total, curr) => total + curr.price * curr.qty, 0)
    : 0;
  return (
    <section className={styles.cartSummery}>
      <h1 className="headers">Cart summery</h1>
      <article className={`title ${styles.cartDetail}`}>
        <p>original total price: </p>
        <span className={"main"}>${originalTotalPrice}</span>
      </article>
      <article className={`title ${styles.cartDetail}`}>
        <p>cart discount: </p>
        <span className={"main"}>${originalTotalPrice - totalPrice}</span>
      </article>
      <article className={`title ${styles.cartDetail}`}>
        <p>net cart price: </p>
        <span className={"main"}>${totalPrice}</span>
      </article>

      <Link to="/checkout" className={`title ${styles.checkout}`}>go to checkout</Link>
    </section>
  );
};

export default CartSummery;
