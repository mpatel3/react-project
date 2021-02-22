// import certain effect function.
import { call, put, takeLatest } from 'redux-saga/effects';
import { ShopActionTypes } from './shop.types';
import { firestore, collectionSnapShottoMap } from '../../firebase/firebase.utils';
import { fetchShopCollectionSuccess, fetchShopCollectionFailure } from './shop.action';

export function* fetchShopCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('shop');
        const snapShot = yield collectionRef.get();
        const shopCollectionMap =  yield call(collectionSnapShottoMap,  snapShot);
        yield put(fetchShopCollectionSuccess(shopCollectionMap))
    } catch(err) {
        yield put(fetchShopCollectionFailure(err))
    }
}
/*
  Starts fetchShopCollectionsAsync on each dispatched `FETCH_SHOPCOLLECTION_START` action.
  Allows concurrent fetches of shop collections.
*/
export function* fetchShopCollectionStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_SHOPCOLLECTION_START,
        fetchShopCollectionsAsync
    )
}