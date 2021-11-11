const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART": {
        if(state.cart.some(pr => pr.id === action.payload.id)){
          const cloneCart = [...state.cart];
          const index = state.cart.findIndex(pr => pr.id === action.payload.id);
          const selectedItem = {...cloneCart[index]};
          selectedItem.qty++;
          cloneCart[index] = selectedItem;
          return { ...state, cart: cloneCart };
        }
        return { ...state, cart: [...state.cart, {...action.payload, qty: 1}] }
      }
      default:
        return state;
    }
};

export default cartReducer;