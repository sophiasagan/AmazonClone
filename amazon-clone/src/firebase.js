// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB_TDGHuNnp4VFSBmLpt5Qk_BGKpmC-bME",
  authDomain: "clone-d613f.firebaseapp.com",
  databaseURL: "https://clone-d613f.firebaseio.com",
  projectId: "clone-d613f",
  storageBucket: "clone-d613f.appspot.com",
  messagingSenderId: "288991095367",
  appId: "1:288991095367:web:1b1615a291c95315721f62",
  measurementId: "G-0N76WJN5GE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
