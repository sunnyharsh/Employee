import { INSERT_DATA_SUCCESS } from "../action.types";
const initState = [];
const reducers = (state = initState, { type, values, error }) => {
    switch (type) {
        case INSERT_DATA_SUCCESS:
            return values;
        default:
            return state;
    }
};

export default reducers;