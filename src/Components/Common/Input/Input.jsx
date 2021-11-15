import { useState } from "react";
import styles from "./Input.module.scss";
import { AiFillEye } from "react-icons/ai";

const Input = ({ name, lbl, formik, type }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <fieldset className={styles.formControl}>
      <label className={`title ${styles.lbl}`} htmlFor={name}>
        {lbl}:
      </label>

      <div>
        <input
          className={`main ${styles.input}`}
          id={name}
          type={isShow ? "text" : type}
          name={name}
          {...formik.getFieldProps(name)}
        />

        {type === "password" && (
          <span className={styles.icon} onClick={() => setIsShow((prevIsShow) => !prevIsShow)}>
            <AiFillEye />
          </span>
        )}
      </div>
      {formik.errors[name] && formik.touched[name] && (
        <span className={`main ${styles.message}`}>{formik.errors[name]}</span>
      )}
    </fieldset>
  );
};

export default Input;
