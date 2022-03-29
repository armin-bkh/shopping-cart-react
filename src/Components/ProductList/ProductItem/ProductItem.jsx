import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useToasts } from "react-toast-notifications";
import { useCartActions, useCart } from "../../../Provider/CartProvider";
import styles from "./Product.module.scss";
import checkInCart from "../../Utils/checkInCart";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ product, similar }) => {
  const navigate = useNavigate();
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
    <article
      className={`shadow hover:shadow-xl transition-all rounded-sm overflow-hidden ${
        similar && "w-48 mx-4 flex-shrink-0"
      }`}
    >
      <div
        onClick={() =>
          navigate(`/products/product-${product._id}`, { state: product })
        }
        className={`flex flex-col cursor-pointer`}
      >
        <img
          className={styles.img}
          src={product.image}
          alt={product.name}
          loading="lazy"
        />
        <div className={`flex items-center justify-between p-2`}>
          <h1 className="title">{product.name}</h1>
          <span className="main">${product.price}</span>
        </div>
      </div>
      <button
        onClick={addToCartHandler}
        type="button"
        className={`title py-2 bg-red-400 text-white flex justify-center items-center w-full`}
      >
        {checkInCart(cart, product._id) ? "In cart" : "Add to cart"}
        <MdOutlineAddShoppingCart className={`ml-2 text-emerald-300`} />
      </button>
    </article>
  );
};

export default ProductItem;
