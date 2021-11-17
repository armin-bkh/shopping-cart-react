import { FaUser } from "react-icons/fa";
import styles from "./UserData.module.scss";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { useEffect } from "react";

const UserData = ({ auth }) => {

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
        </article>
      )}
    </section>
  );
};

export default UserData;
