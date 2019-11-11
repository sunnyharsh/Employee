import { EMPLOYEE_DATA, EMPLOYEE_DATA_SUCCESS } from "../action.types";
//fetch all data from Db
export const employeeData = () => ({
    type: EMPLOYEE_DATA,
});
export const employeeDataSuccess = values => ({
    type: EMPLOYEE_DATA_SUCCESS,
    values
});
