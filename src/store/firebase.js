// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB8FZQGsiEJjCXtCv9dKlnmJ4EBHk2pHtA",
  authDomain: "magic-c84c6.firebaseapp.com",
  databaseURL: "https://magic-c84c6.firebaseio.com",
  projectId: "magic-c84c6",
  storageBucket: "magic-c84c6.appspot.com",
  messagingSenderId: "818308933594",
  appId: "1:818308933594:web:303b65c5b814fbac1682e3",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();

export {db}