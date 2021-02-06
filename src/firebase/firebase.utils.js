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
// store user authenticated via login using google in our firestore in firebase. 
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    // if does exist then we will query inside the firestore for the document to see
    // if it already exists. 
    // this is reference.
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    // this will get us the document value.
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            // create a new document in user collection.
           await userRef.set({
               displayName,
               email,
               createdAt,
               ...additionalData
           }) 
        } catch(err) {
            console.log(err);
        }
    }

    return userRef;
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider  = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInwithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



