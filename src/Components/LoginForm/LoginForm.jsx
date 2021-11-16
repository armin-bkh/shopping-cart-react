import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Input from "../Common/Input/Input";
import styles from "./LoginForm.module.scss";
import postLogin from "../../Services/postLogin";
import { useState } from "react";
import { useToasts } from "react-toast-notifications";
import { useAuthActions } from "../../Provider/AuthProvider";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .required("email is required")
    .email("that is you entered not a email address"),
  password: Yup.string().required("password is required"),
});

const LoginForm = () => {
  const setAuth = useAuthActions();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { addToast } = useToasts();

  const onSubmit = async (values) => {
    try {
      const { data } = await postLogin(values);
      setAuth(data);
      localStorage.setItem("userToken", JSON.stringify(data));
      setError(null);
      navigate("/", { replace: true });
    } catch (error) {
      if (error.response && error.response.data.message) {
        addToast(error.response.data.message, { appearance: "error" });
        setError(error.response.data.message);
      }
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    enableReinitialize: true,
    validateOnMount: true,
    validationSchema,
  });

  return (
    <main className={styles.container}>
      <form
        className={styles.loginFormContainer}
        onSubmit={formik.handleSubmit}
      >
        <h1 className={"headers"}>Login</h1>
        <Input name="email" lbl="Email" formik={formik} />
        <Input name="password" lbl="Password" formik={formik} type="password" />
        {error && <span className={`title ${styles.error}`}>{error}</span>}
        <button
          className={`title ${styles.submitBtn}`}
          type="submit"
          disabled={!formik.isValid}
        >
          submit
        </button>
        <Link to="/signup" className={styles.question}>
          Not signup yet?
        </Link>
      </form>
    </main>
  );
};

export default LoginForm;
