import { useCart } from "../../../Provider/CartProvider";
import styles from "./CartSummery.module.scss";

const CartSummery = () => {
  const { totalPrice } = useCart();
  return <section className={styles.cartSummery}>
      total: $ { totalPrice }
      </section>;
};

export default CartSummery;
