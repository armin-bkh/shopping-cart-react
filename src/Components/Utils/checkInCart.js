const checkInCart = (cart, id) => {
    return cart.find(product => product.id === id);
}

export default checkInCart;