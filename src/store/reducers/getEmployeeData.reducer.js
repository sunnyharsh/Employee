import {  EMPLOYEE_DATA_SUCCESS } from "../action.types";
const initState = [];
const reducers = (state = initState, { type, values, error }) => {
    switch (type) {
        case EMPLOYEE_DATA_SUCCESS:
            state=values
            return state;
        default:
            return state;
    }
};

export default reducers;