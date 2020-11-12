import firebase from 'firebase/app'; //to 1o import einai gia 
// na mporw na xrisimopoihsw ta 2 katw import tou App
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBl7-jEmQjspL08o4EcFS_DPwE_2MS649I",
  authDomain: "ecommercedb-5525e.firebaseapp.com",
  databaseURL: "https://ecommercedb-5525e.firebaseio.com",
  projectId: "ecommercedb-5525e",
  storageBucket: "ecommercedb-5525e.appspot.com",
  messagingSenderId: "336497806472",
  appId: "1:336497806472:web:afbfb4fcbf200483a8633d",
  measurementId: "G-TR8KP1ERHB"
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  
  //kanw ena reference user sto users/"kai to userAuthId pou m dinei to google"
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  console.log(userRef);

  
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};
//kanw install to firebase sto App mou mesw to parapanw config


//kanw export tin metavliti auth gia na mporw na tin kanw use
//opoudipote mesa sto App mou
export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
