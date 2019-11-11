import * as Yup from "yup";
const addEmpSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "username length is too short")
    .max(50, "less than 50 char ")
    .required("username is required"),
  salary: Yup.string()
    .min(4, "Minimum 4 char enter in field")
    .max(12, "less than 12 char ")
    .required("salary is required"),
  age: Yup.string()
    .min(1, "Minimum 1 char enter in field")
    .max(3, "less than 3 char ")
    .required("age is required"),
});
export default addEmpSchema;