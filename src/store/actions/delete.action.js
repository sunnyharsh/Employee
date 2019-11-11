import { DELETE_DATA, DELETE_DATA_SUCCESS } from "../action.types";
//insert data in Db
export const deleteData = (values) => ({
    type: DELETE_DATA,
    values
});
export const deleteDataSuccess = values => ({
    type: DELETE_DATA_SUCCESS,
    values
});
