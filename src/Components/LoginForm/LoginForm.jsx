import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../Common/Input/Input";
import styles from "./LoginForm.module.scss";

const initialValues = {
  name: "",
  password: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("name is required"),
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
        <Input name="name" lbl="Name" formik={formik} />
        <Input name="password" lbl="Password" formik={formik} type="password" />
        <button
          className={`title ${styles.submitBtn}`}
          type="submit"
          disabled={!formik.isValid}
        >
          submit
        </button>
      </form>
    </main>
  );
};

export default LoginForm;
