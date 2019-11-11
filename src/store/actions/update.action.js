import { UPDATE_DATA, UPDATE_DATA_SUCCESS } from "../action.types";
//insert data in Db
export const updateData = (values) => ({
    type: UPDATE_DATA,
    values
});
export const updateDataSuccess = values => ({
    type: UPDATE_DATA_SUCCESS,
    values
});
