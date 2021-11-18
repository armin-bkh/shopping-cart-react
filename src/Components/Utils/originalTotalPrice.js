import { useCart } from "../../Provider/CartProvider";

const originalTotalPrice = (cart) => {
  return cart.length
    ? cart.reduce((total, curr) => total + curr.price * curr.qty, 0)
    : 0;
};

export default originalTotalPrice;
