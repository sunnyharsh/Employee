import { put } from "redux-saga/effects";

import axios from "../api.interface";
import { employeeDataSuccess } from "../actions/getEmployeeData.action";

export function* onEmpData() {
    try {
        const res = yield axios.get("http://dummy.restapiexample.com/api/v1/employees");
        // console.log(res.data,"data")
        yield put(employeeDataSuccess(res.data));
    } catch (error) {
        throw error;
    }
}