import { Link } from "react-router-dom";
import { useAuth } from "../../Provider/AuthProvider";
import { useCart } from "../../Provider/CartProvider";
import CartList from "../Cart/CartList/CartList";
import styles from "./Checkout.module.scss";
import UserData from "./UserData/UserData";
import { FaFingerprint } from "react-icons/fa";
import { Main } from "../styled-component/Main.style";

const Checkout = () => {
  const { cart } = useCart();
  const auth = useAuth();

  return auth ? (
    <main className={styles.container}>
      {!cart.length ? (
        <section>
          <Link className={`text-yellow-400 headers text-sm mx-auto inline-block md:text-3xl`} to="/">
            please add a product to your cart
          </Link>
        </section>
      ) : (
        <CartList disable />
      )}
        <UserData auth={auth} />
    </main>
  ) : (
    <Main
      className={`mx-auto min-h-screen m-5 flex items-center justify-center shadow-md rounded-md`}
    >
      <Link
        className={`text-gray-900 flex flex-col items-center justify-center headers text-4xl`}
        to={{ pathname: "/login", search: "redirect=checkout" }}
      >
        <FaFingerprint className={`text-9xl mb-5 text-yellow-400`} />
        please login
      </Link>
    </Main>
  );
};

export default Checkout;
