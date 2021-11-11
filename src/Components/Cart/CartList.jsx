import { useCart } from "../../Provider/CartProvider";

const CartList = () => {
  const { cart } = useCart();

  return (
    <section>
      {cart.length ? (
        cart.map((item) => <div key={item.id}>{item.name}</div>)
      ) : (
        <h1>your cart is emptey</h1>
      )}
    </section>
  );
};

export default CartList;
