import { useState } from "react";
import styles from "./Input.module.scss";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Input = ({ name, lbl, formik, type }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <fieldset className={`flex flex-col mb-5`}>
      <label
        className={`title mb-1 text-sm md:text-base text-gray-900`}
        htmlFor={name}
      >
        {lbl}:
      </label>

      <div className={`relative`}>
        <input
          className={`main rounded-md w-full px-3 py-1 outline-none text-sm shadow`}
          id={name}
          type={isShow ? "text" : type}
          name={name}
          {...formik.getFieldProps(name)}
        />

        {type === "password" && (
          <span
            className={`absolute top-1.5 right-2 text-gray-900`}
            onClick={() => setIsShow((prevIsShow) => !prevIsShow)}
          >
            {!isShow ? <AiFillEye /> : <AiFillEyeInvisible />}
          </span>
        )}
      </div>
      {formik.errors[name] && formik.touched[name] && (
        <span className={`main text-red-500 text-xs ml-3`}>
          {formik.errors[name]}
        </span>
      )}
    </fieldset>
  );
};

export default Input;
