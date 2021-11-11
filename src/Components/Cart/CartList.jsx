import { useCart } from "../../Provider/CartProvider";
import CartItem from "./CartItem/CartItem";
import styles from "./CartList.module.scss";

const CartList = () => {
  const { cart } = useCart();

  return (
    <section className={styles.cartList}>
      {cart.length ? (
        cart.map((item) => <CartItem key={item.id} product={item} />)
      ) : (
        <h1>your cart is emptey</h1>
      )}
    </section>
  );
};

export default CartList;
