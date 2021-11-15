import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useToasts } from "react-toast-notifications";
import { useCartActions, useCart } from "../../../Provider/CartProvider";
import styles from "./Product.module.scss";
import checkInCart from "../../Utils/checkInCart";

const ProductItem = ({ product }) => {
  const { cart } = useCart();
  const dispatch = useCartActions();
  const { addToast } = useToasts();

  const addToCartHandler = () => {
    if (checkInCart(cart, product._id)) {
      addToast(`added to the number of ${product.name}`, {
        appearance: "success",
      });
    } else
      addToast(`${product.name} added to the cart`, { appearance: "success" });
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <article className={styles.card}>
      <img className={styles.img} src={product.image} alt={product.name} loading="lazy"/>
      <header className={styles.header}>
        <h1 className="title">{product.name}</h1>
        <span className="main">${product.price}</span>
      </header>
      <button
        onClick={addToCartHandler}
        type="button"
        className={`title ${styles.btn}`}
      >
        {checkInCart(cart, product._id) ? "In cart" : "Add to cart"}
        <MdOutlineAddShoppingCart className={styles.icon} />
      </button>
    </article>
  );
};

export default ProductItem;
