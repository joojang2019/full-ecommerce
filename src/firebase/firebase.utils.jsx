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

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
