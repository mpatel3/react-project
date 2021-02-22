import {all, call, takeLatest, put} from 'redux-saga/effects';
import userTypes from '../../redux/user/user.actions';
import { clearCart } from './cart.actions';

export function* clearCartonSignOut() {
    yield put(clearCart());
}

export function* onSignOutSuccess() {
    yield takeLatest(userTypes.SIGN_OUT_START, clearCartonSignOut)
}

export function* cartSagas() {
    yield all([
        call(onSignOutSuccess)
    ])
}