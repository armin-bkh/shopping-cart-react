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
    <article className={`shadow hover:shadow-2xl transition-all flex flex-col rounded-md overflow-hidden`}>
      <img className={styles.img} src={product.image} alt={product.name} loading="lazy"/>
      <div className={`flex items-center justify-between p-2`}>
        <h1 className="title">{product.name}</h1>
        <span className="main text-blue-600">${product.price}</span>
      </div>
      <button
        onClick={addToCartHandler}
        type="button"
        className={`title py-2 bg-gray-900 text-white flex justify-center items-center`}
      >
        {checkInCart(cart, product._id) ? "In cart" : "Add to cart"}
        <MdOutlineAddShoppingCart className={`ml-2 text-yellow-500`} />
      </button>
    </article>
  );
};

export default ProductItem;
