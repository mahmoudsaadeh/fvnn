
import { takeLatest, take, call, put, all } from 'redux-saga/effects';

import ShopActionTypes from './shop.types';

import { getDataFromDb, db } from "../../firebase/firebase.utils";

import {
    fetchCategoriesSuccess,
    fetchCategoriesFailure
} from './shop.actions';

/*
    - saga 'effects' allow us to do different things with the store (like creating actions) or listening for actions
    - takeEvery(): it listens to every action of a specific type that we pass to it
    - put: it is the saga effect for creating actions (instead of dispatch in thunk)
*/

export function* fetchCategoriesAsync() {
    // yield console.log('I am fired');
    yield console.log('fetchCategoriesAsync launched');

    try {
        const categoriesRef = db.collection('categories');
        const snapshot = yield categoriesRef.get();
        console.log('snpshot: ', snapshot);
        //const categoriesMap = yield call(convertCategoriesSnapshotToMap, snapshot);
        //yield put(fetchCategoriesSuccess(categoriesMap));
        yield put(fetchCategoriesSuccess(snapshot));
    } catch (error) {
        yield put(fetchCategoriesFailure(error.message));
    }

}

export function* fetchCategoriesStart() {
    //console.log('fetchCategoriesStart launched');
    yield take(
        ShopActionTypes.FETCH_CATEGORIES_START, 
        fetchCategoriesAsync
    );
}

export function* shopSagas() {
    //console.log('shopSagas launched');
    yield(all([
        call(fetchCategoriesStart)
    ]));
}