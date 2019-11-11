import { put } from "redux-saga/effects";

import axios from "../api.interface";
import { insertDataSuccess } from "../actions/insertEmp.action";

export function* onInsertData(data) {
    try {
        const res = yield axios.post("http://dummy.restapiexample.com/api/v1/create",data.values);
        yield put(insertDataSuccess(res.data));
    } catch (error) {
        throw error;
    }
}