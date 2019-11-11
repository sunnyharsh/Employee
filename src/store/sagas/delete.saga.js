import { put } from "redux-saga/effects";

import axios from "../api.interface";
import { deleteDataSuccess } from "../actions/delete.action";

export function* onDeleteData(data) {
    console.log(data.values,"haina")
    let id=data.values;
    try {
        const res = yield axios.delete(`http://dummy.restapiexample.com/api/v1/delete/${id}`);
        console.log(res, "response")
        yield put(deleteDataSuccess(res.data));
    } catch (error) {
        throw error;
    }
}