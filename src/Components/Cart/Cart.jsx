import CartList from "./CartList/CartList";
import CartSummery from "./CartSummery/CartSummery";
import styles from "./Cart.module.scss";

const Cart = () => {
  return (
    <main className={styles.cartContainer}>
      <section className={styles.cartSection}>
        <CartList />
        <CartSummery />
      </section>
    </main>
  );
};

export default Cart;
