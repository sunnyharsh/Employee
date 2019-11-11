import { INSERT_DATA, INSERT_DATA_SUCCESS } from "../action.types";
//insert data in Db
export const insertData = (values) => ({
    type: INSERT_DATA,
    values
});
export const insertDataSuccess = values => ({
    type: INSERT_DATA_SUCCESS,
    values
});
