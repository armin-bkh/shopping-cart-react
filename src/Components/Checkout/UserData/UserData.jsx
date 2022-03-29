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
        <article
          className={`p-5 shadow-md rounded-md flex flex-col items-center sticky top-20`}
        >
          <FaUser className={`text-gray-900 text-9xl`} />
          <h1 className={`title text-red-400 mb-10 mt-2 text-2xl`}>
            {auth.name}
          </h1>
          <ul className={`text-sm lg:text-base`}>
            <li className={`main flex items-center`}>
              <BsFillTelephoneFill className={`text-red-400 mr-1`} /> tel:{" "}
              {auth.phoneNumber}
            </li>
            <li className={`main flex items-center`}>
              <MdOutlineMailOutline className={`text-red-400 mr-1`} /> email:{" "}
              {auth.email}
            </li>
          </ul>
          <ul className={`flex flex-col mt-10 w-full text-sm lg:text-base`}>
            <li className={`main flex items-center justify-between`}>
              <span className={`flex items-center`}>
                <MdOutlineAttachMoney className={`text-red-400 mr-1`} />{" "}
                original total price:
              </span>
              ${originalTotalPrice(cart)}
            </li>
            <li className={`main flex items-center justify-between`}>
              <span className={`flex items-center`}>
                <MdMoneyOff className={`text-red-400 mr-1`} /> disconut:
              </span>
              ${originalTotalPrice(cart) - totalPrice}
            </li>
            <li className={`main flex items-center justify-between`}>
              <span className={`flex items-center`}>
                <MdPriceCheck className={`text-red-400 mr-1`} /> total price:
              </span>
              ${totalPrice}
            </li>
          </ul>

          <button
            type="button"
            className={`mt-10 py-2 bg-red-400 text-white w-full rounded-md title`}
          >
            pay
          </button>
        </article>
      )}
    </section>
  );
};

export default UserData;
