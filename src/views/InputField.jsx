import React from "react";

const InputField = ({ data, formik }) => {
  const { label, name, type } = data;

  return (
    <div>
      <label>{label}</label>
      <input
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name={name}
        type={type}
      />
      {formik.errors[name] && formik.touched[name] && (
        <span>{formik.errors[name]}</span>
      )}
    </div>
  );
};

export default InputField;
