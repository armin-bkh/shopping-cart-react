import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Input from "../Common/Input/Input";
import styles from "./SignupForm.module.scss";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirmation: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("name is required"),
  email: Yup.string()
    .required("email is required")
    .email("that is you entered not a email address"),
  phoneNumber: Yup.string()
    .required("phone number is required")
    .matches(/^[0-9]{11}$/, "that is you entered not a phone number"),
  password: Yup.string()
    .required("password is required")
    .min(6, "password length should be greate than 6"),
  passwordConfirmation: Yup.string("password confirmatin is required").oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const onSubmit = (values) => {
  console.log(values);
};

const SignupForm = () => {
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
        className={styles.signupFormContainer}
        onSubmit={formik.handleSubmit}
      >
        <h1 className={`headers`}>Signup</h1>
        <Input name="name" lbl="Name" formik={formik} />
        <Input
          name="phoneNumber"
          lbl="Phone number"
          formik={formik}
          type="tel"
        />
        <Input name="email" lbl="Email" formik={formik} type="email" />
        <Input name="password" lbl="Password" formik={formik} type="password" />
        <Input
          name="passwordConfirmation"
          lbl="Password confirmation"
          formik={formik}
          type="password"
        />
        <button
          className={`title ${styles.submitBtn}`}
          type="submit"
          disabled={!formik.isValid}
        >
          Submit
        </button>

        <Link to="/login" className={styles.question}>Already login?</Link>
      </form>
    </main>
  );
};

export default SignupForm;
