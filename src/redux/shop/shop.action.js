import { ShopActionTypes } from './shop.types';
import { firestore, collectionSnapShottoMap } from '../../firebase/firebase.utils';

export const fetchShopCollectionSuccess = shopCollectoinMap => ({
    type: ShopActionTypes.FETCH_SHOPCOLLECTION_SUCCESS,
    payload: shopCollectoinMap
});


export const fetchShopCollectionStart = () => ({
    type: ShopActionTypes.FETCH_SHOPCOLLECTION_START,
})

export const fetchShopCollectionFailure = (err) => ({
    type: ShopActionTypes.FETCH_SHOPCOLLECTION_FAILURE,
    payload: err.message
})

// Redux Thunk Usage.
export const fetchShopCollectionStartAsync = () => dispatch => {
    const collectionRef = firestore.collection('shop');
    dispatch(fetchShopCollectionStart());
    
    collectionRef
    .get()
    .then(snapShot => {
        const shopCollectionMap = collectionSnapShottoMap(snapShot);
        dispatch(fetchShopCollectionSuccess(shopCollectionMap));
    })
    .catch(err => {
        dispatch(fetchShopCollectionFailure(err));
    })
}
