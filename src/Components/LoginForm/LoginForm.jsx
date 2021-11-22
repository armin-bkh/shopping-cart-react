import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Input from "../Common/Input/Input";
import styles from "./LoginForm.module.scss";
import postLogin from "../../Services/postLogin";
import WithGaurd from "../HOC/WithGaurd";
import { useState } from "react";
import { useToasts } from "react-toast-notifications";
import { useAuthActions } from "../../Provider/AuthProvider";
import { useQuery } from "../../hooks/useQuery";

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
  const [{ redirect }, search] = useQuery();

  const onSubmit = async (values) => {
    try {
      const { data } = await postLogin(values);
      setAuth(data);
      setError(null);
      if (redirect) {
        navigate(`/${redirect}`, { replace: true });
        return;
      }
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
        className={`flex flex-col shadow-2xl p-5 rounded-md w-full mx-2 md:w-3/6 lg:w-2/6`}
        onSubmit={formik.handleSubmit}
      >
        <h1 className={"headers text-yellow-400 text-2xl md:text-4xl mb-10"}>
          Login
        </h1>
        <Input name="email" lbl="Email" formik={formik} />
        <Input name="password" lbl="Password" formik={formik} type="password" />
        {error && <span className={`title text-red-500 text-sm`}>{error}</span>}
        <button
          className={`title mt-5 py-2 bg-gray-900 text-yellow-400 rounded-md transition-all text-sm md:text-base ${
            !formik.isValid ? "opacity-50" : "opacity-100 "
          }`}
          type="submit"
          disabled={!formik.isValid}
        >
          submit
        </button>
        <Link
          to={search ? { pathname: "/signup", search } : "/signup"}
          className={`mt-5 text-sm md:text-base border-t border-yellow-400 py-1 text-yellow-400 font-bold text-center`}
        >
          Not signup yet?
        </Link>
      </form>
    </main>
  );
};

export default WithGaurd(LoginForm);
