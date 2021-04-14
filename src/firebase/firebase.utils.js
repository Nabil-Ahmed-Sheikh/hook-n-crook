import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBBpT8A1XQjF4Btu2DmQQWtt5ARdxgMNGg",
    authDomain: "hook-n-crook-db.firebaseapp.com",
    projectId: "hook-n-crook-db",
    storageBucket: "hook-n-crook-db.appspot.com",
    messagingSenderId: "117427044212",
    appId: "1:117427044212:web:3ae445ec3e6e3d51cb7621",
    measurementId: "G-B6J209DZZ1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;