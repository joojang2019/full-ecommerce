import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBaXOAG79ofdA3sDdDz3nm3s4iYmXJYQiE",
  authDomain: "crwn-db-1876f.firebaseapp.com",
  databaseURL: "https://crwn-db-1876f.firebaseio.com",
  projectId: "crwn-db-1876f",
  storageBucket: "crwn-db-1876f.appspot.com",
  messagingSenderId: "852209439811",
  appId: "1:852209439811:web:755bb960448e407ebd30f6",
  measurementId: "G-BQCD44YN5M",
};

// Create user if there aren't any already.
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
