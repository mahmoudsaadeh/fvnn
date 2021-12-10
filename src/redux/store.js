
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";

import thunk from 'redux-thunk';



// const sagaMiddleware = createSagaMiddleware();

// const middlewares = [sagaMiddleware, logger, thunk];
const middlewares = [thunk];


if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}


export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// sagaMiddleware.run(rootSaga);


export const persistor = persistStore(store);


const final_object = {store, persistor};
export default final_object;