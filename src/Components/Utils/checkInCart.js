const checkInCart = (cart, id) => {
    return cart.find(product => product._id === id);
}

export default checkInCart;