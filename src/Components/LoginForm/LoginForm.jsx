import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Input from "../Common/Input/Input";
import styles from "./LoginForm.module.scss";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().required("email is required").email("that is you entered not a email address"),
  password: Yup.string().required("password is required"),
});

const onSubmit = (values) => {
  console.log(values);
};

const LoginForm = () => {
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
        <button
          className={`title ${styles.submitBtn}`}
          type="submit"
          disabled={!formik.isValid}
        >
          submit
        </button>
        <Link to="/signup" className={styles.question}>Not signup yet?</Link>
      </form>
    </main>
  );
};

export default LoginForm;
