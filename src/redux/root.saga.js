import {all, call} from 'redux-saga/effects';
import { fetchShopCollectionStart } from '../redux/shop/shop.sagas';
import { userSagas } from '../redux/user/user.sagas';
import { cartSagas } from '../redux/cart/cart.sagas';

export default function* rootSaga() {
    yield all([call(fetchShopCollectionStart), call(userSagas), call(cartSagas)])
}