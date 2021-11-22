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
      <section className={`flex flex-col shadow-2xl p-5 rounded-md items-center`}>
        <div className={`text-9xl text-gray-900`}>
          <FaUser />
        </div>
        <h1 className={`title text-yellow-400 text-2xl mt-2 mb-10`}>{auth?.name}</h1>
        <ul>
          <li className="main flex items-center">
              <BsFillTelephoneFill className={`mr-2 text-yellow-400`} />
            {auth?.phoneNumber}
          </li>
          <li className="main flex items-center">
              <MdOutlineMailOutline className={`mr-2 text-yellow-400`} />
            {auth?.email}
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Profile;
