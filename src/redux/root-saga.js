
import { all, call } from 'redux-saga/effects';

import { shopSagas } from './shop/shop.sagas';


/*
    - all: it launches all the sagas at once, each in a separate task
    - yield fetchCollectionsStart() (3 times)
    - the this way, each saga should wait for the previous one to finish so that it gets launched!
*/
//console.log('root saga triggered');

export default function* rootSaga() {
    yield all([
        call(shopSagas)
    ]);
}