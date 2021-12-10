
import { combineReducers } from "redux";

import shopReducer from './shop/shop.reducer';

import { persistReducer } from "redux-persist";
// I want to use local storage as my default storage
import storage from 'redux-persist/lib/storage';

/* The JSON object that represents the possible configurations that we want for redux persist to use */
const persistConfig = {
    // at what point inside of our reducer object we want to start storing everything
    key: 'root',
    storage,
    // the reducers that we want to persist
    whitelist: ['cart']
}


const rootReducer = combineReducers({
    shop: shopReducer
});


export default persistReducer(persistConfig, rootReducer);