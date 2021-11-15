const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      if (state.cart.some((pr) => pr._id === action.payload._id)) {
        const cloneCart = [...state.cart];
        const index = state.cart.findIndex((pr) => pr._id === action.payload._id);
        const selectedItem = { ...cloneCart[index] };
        selectedItem.qty++;
        cloneCart[index] = selectedItem;
        return { cart: cloneCart, totalPrice: state.totalPrice + selectedItem.offPrice };
      }
      return { cart: [...state.cart, { ...action.payload, qty: 1 }],
       totalPrice: state.totalPrice + action.payload.offPrice };
    }
    case "REMOVE_FROM_CART": {
      const cloneCart = [...state.cart];
      const index = state.cart.findIndex((pr) => pr._id === action.payload._id);
      const selectedItem = { ...cloneCart[index] };
      if (selectedItem.qty === 1) {
        const filteredCart = cloneCart.filter(
          (pr) => pr._id !== action.payload._id
        );
        return { cart: filteredCart,
         totalPrice: state.totalPrice - selectedItem.offPrice };
      }
      selectedItem.qty--;
      cloneCart[index] = selectedItem;
      return { cart: cloneCart,
       totalPrice: state.totalPrice - selectedItem.offPrice };
    }
    case "CALC_TOTALPRICE": {
      const prices = state.cart.map((pr) => pr.price * pr.qty);
      if (!prices.length) return {...state, totalPrice: 0};
      const totalPrice = prices.reduce((total, num) => {
        return total + num;
      });
      return { ...state, totalPrice };
    }
    default:
      return state;
  }
};

export default cartReducer;
