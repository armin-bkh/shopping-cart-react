import { useCart } from "../../../Provider/CartProvider";
import CartItem from "../CartItem/CartItem";
import styles from "./CartList.module.scss";

const CartList = ({disable}) => {
  const { cart } = useCart();

  return (
    <section className={styles.cartList}>
      {cart.length ? (
        cart.map((item) => <CartItem disable={disable} key={item._id} product={item} />)
      ) : (
        <h1 className={`headers ${styles.message}`}>your cart is emptey</h1>
      )}
    </section>
  );
};

export default CartList;
