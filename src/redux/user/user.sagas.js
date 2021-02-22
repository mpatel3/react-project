import { takeLatest, put, all, call } from 'redux-saga/effects';
import userTypes  from './user.types';
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';
import { 
    googleSignInSuccess, 
    googleSignInFailure, 
    emailSignInSuccess, 
    emailSignInFailure,
    signOutSuccess,
    signOutFailure
} from './user.actions';

export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        const userRef = yield call(createUserProfileDocument, user);
        const snapShot = yield userRef.get();
        yield put(
            googleSignInSuccess({id: snapShot.id, ...snapShot.data() })
        );

    } catch(err) {
        yield put(
            googleSignInFailure(err)
        );
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(userTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInwithEmailAndPassWord({ payload: {email, password } }) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        const userRef = yield call(createUserProfileDocument, user);
        const snapShot = yield userRef.get();
        yield put(
            emailSignInSuccess({ id: snapShot.id, ...snapShot.data()})
        );
    } catch(err) {
        yield put(
            emailSignInFailure(err)
        );
    }
}

export function* emailSignInStart() {
    yield takeLatest(userTypes.EMAIL_SIGN_IN_START, signInwithEmailAndPassWord)
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        console.log(userAuth);
        // const userRef = yield call(createUserProfileDocument, user);
        // const snapShot = yield userRef.get();
        
    } catch (err) {
        
    }
}

export function* onCheckUserSession() {
    yield takeLatest(userTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* signOutUser() {
    try {
        auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure(error));
    }
}

export function* onSignOutStart() {
    yield takeLatest(userTypes.SIGN_OUT_START, signOutUser)
}

export function* userSagas() {
    // instiantiate all other sagas we need to call. 
    yield all([
        call(onGoogleSignInStart), 
        call(emailSignInStart), 
        call(onCheckUserSession),
        call(onSignOutStart)
    ]);
}

