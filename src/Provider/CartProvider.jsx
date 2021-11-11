import { useReducer, useContext, useEffect } from "react";
import { CartContext, CartContextDispatcher } from "./CartContext";
import cartReducer from "./CartReducer";

const initialState = {
  cart: [],
  totalPrice: 0,
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={cart}>
      <CartContextDispatcher.Provider value={dispatch}>
        {children}
      </CartContextDispatcher.Provider>
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
export const useCartActions = () => useContext(CartContextDispatcher);
