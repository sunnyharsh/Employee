import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers/index.reducer";
import sagas from "./sagas/index.saga";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const REDUCERS = combineReducers(reducers);
const SAGA = createSagaMiddleware();

export default function configureStore(initialState = {}) {
    const STORE = createStore(
        REDUCERS,
        initialState,
        composeEnhancers(applyMiddleware(SAGA))
    );

    // Running Sagas
    SAGA.run(sagas);

    if (module.hot && process.env.NODE_ENV === "development") {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept("./reducers/index.reducer", () => {
            const nextRootReducer = require("./reducers/index.reducer");
            STORE.replaceReducer(nextRootReducer);
        });
    }

    return STORE;
}