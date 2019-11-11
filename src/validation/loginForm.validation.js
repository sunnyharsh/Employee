import * as Yup from "yup";
const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, "username length is too short")
    .max(5, "less than 6 char ")
    .required("username is required"),
  pass: Yup.string()
    .min(6, "Minimum 6 char enter in field")
    .max(6, "less than 6 char ")
    .required("password is required"),
});
export default LoginSchema;