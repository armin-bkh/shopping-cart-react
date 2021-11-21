import { Link } from "react-router-dom";
import { useAuth } from "../../../Provider/AuthProvider";
import { useCart } from "../../../Provider/CartProvider";
import originalTotalPrice from "../../Utils/originalTotalPrice";
import styles from "./CartSummery.module.scss";

const CartSummery = () => {
  const { cart, totalPrice } = useCart();
  
  return (
    <section className={styles.cartSummery}>
      <h1 className="headers text-yellow-600 mb-5 text-xl">Cart summery</h1>
      <article className={`title ${styles.cartDetail}`}>
        <p>original total price: </p>
        <span className={"main text-blue-600"}>${originalTotalPrice(cart)}</span>
      </article>
      <article className={`title ${styles.cartDetail}`}>
        <p>cart discount: </p>
        <span className={"main text-blue-600"}>${originalTotalPrice(cart) - totalPrice}</span>
      </article>
      <article className={`title ${styles.cartDetail}`}>
        <p>net cart price: </p>
        <span className={"main text-blue-600"}>${totalPrice}</span>
      </article>

      <Link
        to={{pathname: "/login", search: "redirect=checkout"}}
        className={`title text-white mt-auto flex justify-center items-center rounded-md py-3 bg-gray-900`}
      >
        go to checkout
      </Link>
    </section>
  );
};

export default CartSummery;
