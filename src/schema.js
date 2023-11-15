// npm i yup
import * as yup from "yup";

const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])(.{5,})$/;
export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email type")
    .required("This field is required"),
  age: yup
    .number()
    .min(18)
    .max(100)
    .required("This field is required")
    .integer("Type in a whole number"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters.")
    .matches(regex, "Password is not strong enough")
    .required("This field is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("This field is required"),
});
