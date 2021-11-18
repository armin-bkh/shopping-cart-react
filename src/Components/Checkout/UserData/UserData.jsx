import { FaUser } from "react-icons/fa";
import styles from "./UserData.module.scss";
import { BsFillTelephoneFill } from "react-icons/bs";
import {
  MdOutlineMailOutline,
  MdPriceCheck,
  MdMoneyOff,
  MdOutlineAttachMoney,
} from "react-icons/md";
import { useCart } from "../../../Provider/CartProvider";
import originalTotalPrice from "../../Utils/originalTotalPrice";

const UserData = ({ auth }) => {
  const { cart, totalPrice } = useCart();

  return (
    <section className={styles.container}>
      {auth && (
        <article className={styles.card}>
          <FaUser className={styles.profile} />
          <h1 className={`title ${styles.name}`}>{auth.name}</h1>
          <ul>
            <li className={`main ${styles.item}`}>
              <BsFillTelephoneFill /> tel: {auth.phoneNumber}
            </li>
            <li className={`main ${styles.item}`}>
              <MdOutlineMailOutline /> email: {auth.email}
            </li>
          </ul>
          <ul className={styles.totalList}>
            <li className={`main ${styles.total}`}>
              <span>
                <MdOutlineAttachMoney /> original total price:
              </span>
              ${originalTotalPrice(cart)}
            </li>
            <li className={`main ${styles.total}`}>
              <span>
                <MdMoneyOff /> disconut:
              </span>
              ${originalTotalPrice(cart) - totalPrice}
            </li>
            <li className={`main ${styles.total}`}>
              <span>
                <MdPriceCheck /> total price:
              </span>
              ${totalPrice}
            </li>
          </ul>

          <button type="button" className={styles.payBtn}>
            pay
          </button>
        </article>
      )}
    </section>
  );
};

export default UserData;
