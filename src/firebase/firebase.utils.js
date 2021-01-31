import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDtdTVhRjUHe8gzQ53DhE9p_5Y9uItdj3k",
    authDomain: "learn-firebase-f99ec.firebaseapp.com",
    projectId: "learn-firebase-f99ec",
    storageBucket: "learn-firebase-f99ec.appspot.com",
    messagingSenderId: "87650865598",
    appId: "1:87650865598:web:2df71817a67ec1ed4229ef"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider  = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInwithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



