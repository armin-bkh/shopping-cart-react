import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useToasts } from "react-toast-notifications";
import { useCartActions } from "../../../Provider/CartProvider";
import styles from "./Product.module.scss";

const ProductItem = ({ product }) => {
  const dispatch = useCartActions();
  const { addToast } = useToasts();

  const addToCartHandler = () => {
      dispatch({ type: "ADD_TO_CART", payload: product });
      addToast(`${product.name} added to the cart`, { appearance: "success" });
  }

  return (
    <article className={styles.card}>
      <img className={styles.img} src={product.image} alt={product.name} />
      <header className={styles.header}>
        <h1 className="title">{product.name}</h1>
        <span className="main">${product.price}</span>
      </header>
      <button
        onClick={addToCartHandler}
        type="button"
        className={`title ${styles.btn}`}
      >
        add to cart
        <MdOutlineAddShoppingCart className={styles.icon} />
      </button>
    </article>
  );
};

export default ProductItem;
