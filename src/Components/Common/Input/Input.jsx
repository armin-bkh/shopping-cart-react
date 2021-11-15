import styles from './Input.module.scss';

const Input = ({ name, lbl, formik, type }) => {
  return (
    <fieldset className={styles.formControl}>
        <label className={`title ${styles.lbl}`} htmlFor={name}>{lbl}:</label>
        <input
        className={`main ${styles.input}`}
        id={name}
          type={type || "text"}
          name={name}
          {...formik.getFieldProps(name)}
        />
      {formik.errors[name] &&
        formik.touched[name] && <span className={`main ${styles.message}`}>{formik.errors[name]}</span>}
    </fieldset>
  );
};

export default Input;
