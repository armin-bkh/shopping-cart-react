import { BiTrash, BiPlus, BiMinus } from "react-icons/bi";
import styles from "./CartItem.module.scss";

const CartItem = ({ product }) => {
  return (
    <article className={styles.cartItem}>
      <div className={styles.img}>
        <img src={product.image} alt={product.name} />
      </div>
      <div className={styles.description}>
        <div>
          <h1>{product.name}</h1>
          <span>${product.price}</span>
        </div>
        <div className={styles.btnContainer}>
          <button className={styles.delBtn} type="button">
            <BiTrash />
          </button>
          <div className={styles.incDecContainer}>
            <button className={styles.incDecBtn} type="button">
              <BiPlus />
            </button>
            <span className={styles.productQty}>{product.qty}</span>
            <button className={styles.incDecBtn} type="button">
              <BiMinus />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
