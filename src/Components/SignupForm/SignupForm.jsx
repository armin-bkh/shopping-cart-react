import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import * as Yup from "yup";
import { useAuthActions } from "../../Provider/AuthProvider";
import WithGaurd from "../HOC/WithGaurd";
import postSignup from "../../Services/postSignup";
import Input from "../Common/Input/Input";
import styles from "./SignupForm.module.scss";
import { useQuery } from "../../hooks/useQuery";

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
    .min(8, "password length should be greate than 8"),
  passwordConfirmation: Yup.string("password confirmatin is required").required("password confirmation is required").oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const SignupForm = () => {
  const setAuth = useAuthActions();
  const [error, setError] = useState(null);
  const { addToast } = useToasts();
  const navigate = useNavigate(); 
  const [{ redirect } , search] = useQuery();


  const onSubmit = async (values) => {
    const { name, email, phoneNumber, password } = values;
    const userData = { name, email, phoneNumber, password };
    try {
      const {  data } = await postSignup(userData);
      setAuth(data);
      setError(null);
      if(redirect){
        navigate(`/${redirect}`, { replace: true });
        return;
      }
      navigate("/", { replace: true })
    } catch (error) {
      if(error.response && error.response.data.message){
        setError(error.response.data.message);
        addToast(error.response.data.message, { appearance: 'error' })
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
        {error && <span className={`title ${styles.error}`}> {error} </span>}
        <button
          className={`title ${styles.submitBtn}`}
          type="submit"
          disabled={!formik.isValid}
        >
          Submit
        </button>

        <Link to={search ? { pathname: "/login", search } : "/login"} className={styles.question}>Already login?</Link>
      </form>
    </main>
  );
};

export default WithGaurd(SignupForm);
