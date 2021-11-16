import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { useAuth } from "../../Provider/AuthProvider";
import styles from "./Profile.module.scss";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) navigate("/", { replace: true });
  }, []);

  return (
    <main className={styles.container}>
      <section className={styles.card}>
        <div className={styles.profile}>
          <FaUser />
        </div>
        <h1 className={`title ${styles.name}`}>{auth.name}</h1>
        <ul>
          <li className="main">
              <BsFillTelephoneFill className={styles.icon} />
            {auth.phoneNumber}
          </li>
          <li className="main">
              <MdOutlineMailOutline className={styles.icon} />
            {auth.email}
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Profile;
