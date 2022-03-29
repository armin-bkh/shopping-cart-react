import { BiTrash, BiPlus, BiMinus } from "react-icons/bi";
import styles from "./CartItem.module.scss";
import { useCartActions, useCart } from "../../../Provider/CartProvider";
import checkQtyProductInCart from "../../Utils/checkQtyProductInCart";
import { useToasts } from "react-toast-notifications";

const CartItem = ({ product, disable }) => {
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
    <article className={`shadow hover:shadow-lg ${styles.cartItem}`}>
      <div className={styles.img}>
        <img src={product.image} alt={product.name} />
      </div>
      <div className={`p-1 md:p-2 ${styles.description}`}>
        <div>
          <h1 className={`title`}>{product.name}</h1>
          <span className={`main text-red-400`}>
            ${product.offPrice * product.qty}
          </span>
        </div>
        {!disable && (
          <div className={`border rounded-md flex overflow-hidden`}>
            <button
              onClick={incrementHandler}
              className={`border-r text-emerald-300 p-1 transition hover:bg-emerald-300 hover:text-white`}
              type="button"
            >
              <BiPlus />
            </button>
            <span className={`main px-2`}>{product.qty}</span>
            <button
              onClick={decrementHandler}
              className={`border-l p-1 transition ${
                product.qty === 1
                  ? "text-red-400 hover:bg-red-400 hover:text-white"
                  : "text-emerald-300 hover:bg-emerald-300 hover:text-white"
              }`}
              type="button"
            >
              {product.qty > 1 ? <BiMinus /> : <BiTrash />}
            </button>
          </div>
        )}
      </div>
    </article>
  );
};

export default CartItem;
