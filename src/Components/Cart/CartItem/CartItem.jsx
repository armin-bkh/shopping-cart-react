import { BiTrash, BiPlus, BiMinus } from "react-icons/bi";
import styles from "./CartItem.module.scss";
import { useCartActions } from "../../../Provider/CartProvider";

const CartItem = ({ product }) => {
  const dispatch = useCartActions();

  return (
    <article className={styles.cartItem}>
      <div className={styles.img}>
        <img src={product.image} alt={product.name} />
      </div>
      <div className={styles.description}>
        <div>
          <h1 className={`title`}>{product.name}</h1>
          <span className={`main`}>${product.price * product.qty}</span>
        </div>
        <div className={styles.btnContainer}>
            <button
              onClick={() =>
                dispatch({ type: "ADD_TO_CART", payload: product })
              }
              className={styles.incDecBtn}
              type="button"
            >
              <BiPlus />
            </button>
            <span className={`main ${styles.productQty}`}>{product.qty}</span>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: product })
              }
              className={`${styles.incDecBtn} ${product.qty === 1 && styles.delBtn}`}
              type="button"
            >
              {product.qty > 1 ? <BiMinus /> : <BiTrash />}
            </button>
          </div>
      </div>
    </article>
  );
};

export default CartItem;
