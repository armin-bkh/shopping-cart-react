const checkQtyProductInCart = (cart, id) => {
    const selectedItem = cart.find(product => product.id === id);
    return selectedItem.qty;
}

export default checkQtyProductInCart;