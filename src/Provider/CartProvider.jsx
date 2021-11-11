import { useReducer, useContext } from "react";
import { CartContext, CartContextDispatcher } from "./CartContext";
import cartReducer from "./CartReducer";

const CartProvider = ({ children }) => {
  const [shoppingCart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={shoppingCart}>
      <CartContextDispatcher.Provider value={dispatch}>
        {children}
      </CartContextDispatcher.Provider>
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
export const useCartActions = () => useContext(CartContextDispatcher);
