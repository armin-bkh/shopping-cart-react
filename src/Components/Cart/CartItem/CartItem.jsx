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
    <article className={`shadow hover:shadow-2xl ${styles.cartItem}`}>
      <div className={styles.img}>
        <img src={product.image} alt={product.name} />
      </div>
      <div className={`p-1 md:p-2 ${styles.description}`}>
        <div>
          <h1 className={`title`}>{product.name}</h1>
          <span className={`main text-blue-600`}>${product.offPrice * product.qty}</span>
        </div>
        {!disable && (
          <div className={`border rounded-md border-gray-900 flex overflow-hidden`}>
            <button
              onClick={incrementHandler}
              className={`border-r border-gray-900 text-blue-600 p-1 transition hover:bg-blue-600 hover:text-white`}
              type="button"
            >
              <BiPlus />
            </button>
            <span className={`main px-2`}>{product.qty}</span>
            <button
              onClick={decrementHandler}
              className={`border-l border-gray-900 p-1 transition ${product.qty === 1 ? 'text-yellow-400 hover:bg-yellow-400 hover:text-white' : 'text-blue-600 hover:bg-blue-600 hover:text-white'}`}
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
