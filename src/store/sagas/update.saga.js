import { put } from "redux-saga/effects";

import axios from "../api.interface";
import { updateDataSuccess } from "../actions/update.action";

export function* onUpdateData(data) {
    let id=data.values.id;
    try {
        const res = yield axios.put(`http://dummy.restapiexample.com/api/v1/update/${id}`,data.values);
        yield put(updateDataSuccess(res.data));
    } catch (error) {
        throw error;
    }
}