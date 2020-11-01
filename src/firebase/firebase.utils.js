import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCdoQvuNhIqvbRRh-iaSPSGD1o1cdaEiZ4",
    authDomain: "crwn-db-b6de5.firebaseapp.com",
    databaseURL: "https://crwn-db-b6de5.firebaseio.com",
    projectId: "crwn-db-b6de5",
    storageBucket: "crwn-db-b6de5.appspot.com",
    messagingSenderId: "1018085121895",
    appId: "1:1018085121895:web:ce9fb92dd266cc57e4d9c2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;