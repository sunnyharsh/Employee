import { LOGOUT_SHOW } from "../action.types";
const initState = [];
const reducers = (state = initState, { type, values, error }) => {
    switch (type) {
        case LOGOUT_SHOW:
            state=values
            return state;
        default:
            return state;
    }
};

export default reducers;