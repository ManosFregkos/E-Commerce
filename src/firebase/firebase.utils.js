import firebase from 'firebase/app'; //to 1o import einai gia 
// na mporw na xrisimopoihsw ta 2 katw import tou App
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBl7-jEmQjspL08o4EcFS_DPwE_2MS649I",
    authDomain: "ecommercedb-5525e.firebaseapp.com",
    databaseURL: "https://ecommercedb-5525e.firebaseio.com",
    projectId: "ecommercedb-5525e",
    storageBucket: "ecommercedb-5525e.appspot.com",
    messagingSenderId: "336497806472",
    appId: "1:336497806472:web:afbfb4fcbf200483a8633d",
    measurementId: "G-TR8KP1ERHB"
  };

//kanw install to firebase sto App mou mesw to parapanw config
firebase.initializeApp(config);

//kanw export tin metavliti auth gia na mporw na tin kanw use
//opoudipote mesa sto App mou
export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
