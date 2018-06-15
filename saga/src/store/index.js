import { createStore, applyMiddleware } from "redux";
import createSagMiddleware from "redux-saga";

import { rootReducer } from "./reducers";
import { watcherSaga } from "./sagas";

const sagaMiddleware = createSagMiddleware();

const store = createStore(
    rootReducer,
    {},
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watcherSaga);

export default store;