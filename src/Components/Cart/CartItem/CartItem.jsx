import { BiTrash, BiPlus, BiMinus } from "react-icons/bi";
import styles from "./CartItem.module.scss";
import { useCartActions, useCart } from "../../../Provider/CartProvider";
import checkQtyProductInCart from "../../Utils/checkQtyProductInCart";
import { useToasts } from "react-toast-notifications";

const CartItem = ({ product }) => {
  const { cart } = useCart();
  const dispatch = useCartActions();
  const { addToast } = useToasts();

  const decrementHandler = () => {
    if (checkQtyProductInCart(cart, product._id) === 1) {
      addToast(`${product.name} removed from cart`, { appearance: "success" });
    } else
      addToast(`the number of ${product.name} decreased`, {
        appearance: "success",
      });
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  const incrementHandler = () => {
    addToast(`added to the number of ${product.name}`, {
      appearance: "success",
    });
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <article className={styles.cartItem}>
      <div className={styles.img}>
        <img src={product.image} alt={product.name} />
      </div>
      <div className={styles.description}>
        <div>
          <h1 className={`title`}>{product.name}</h1>
          <span className={`main`}>${product.offPrice * product.qty}</span>
        </div>
        <div className={styles.btnContainer}>
          <button
            onClick={incrementHandler}
            className={styles.incDecBtn}
            type="button"
          >
            <BiPlus />
          </button>
          <span className={`main ${styles.productQty}`}>{product.qty}</span>
          <button
            onClick={decrementHandler}
            className={`${styles.incDecBtn} ${
              product.qty === 1 && styles.delBtn
            }`}
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
