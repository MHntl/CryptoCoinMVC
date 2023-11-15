import { useFormik } from "formik";
import InputField from "./InputField";
import { schema } from "../schema";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const inputs = [
    { label: "Email", name: "email", type: "email" },
    { label: "Age", name: "age", type: "number" },
    { label: "Password", name: "password", type: "password" },
    { label: "Confirm Password", name: "confirmPassword", type: "password" },
  ];
  // npm install formik --save
  //UseFormik
  const formik = useFormik({
    //Set Formik inputData
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    //Set Form onSubmit Fn
    onSubmit: (values, actions) => {
      localStorage.setItem("user", JSON.stringify(values));
      //values=FormInputValue || actions=Fn(workOn Form)
      //reset Values
      actions.resetForm();
      navigate("/home");
    },
    //validation scheme: From yup(schema.js)
    validationSchema: schema,
  });
  return (
    <div className="auth-page">
      <div className="container">
        <div className="text-center my-5">
          <h2 style={{ color: "#646CFF" }}>
            <span style={{ color: "gold" }}>Sign</span> Up
          </h2>
        </div>
        {/* Form Section */}
        <form onSubmit={formik.handleSubmit}>
          {inputs.map((data) => (
            <InputField formik={formik} data={data} />
          ))}
          <button type="submit">Sing Up</button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
