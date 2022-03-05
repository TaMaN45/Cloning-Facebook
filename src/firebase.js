import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

// initialize firebaseApp with firebase-config values
const firebaseConfig = {
  apiKey: "AIzaSyBi9OUsldm4c0WSakFcwo4Tl63Wz3rwfHw",
  authDomain: "facebook-clone-88e11.firebaseapp.com",
  projectId: "facebook-clone-88e11",
  storageBucket: "facebook-clone-88e11.appspot.com",
  messagingSenderId: "512203534572",
  appId: "1:512203534572:web:80e527ce325a7e4686f5c9",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

// firebase - Data-Base
const db = app.firestore();

// firebase - Storage
const storage = firebase.storage();

// firebase - Auth
const auth = firebase.auth();

// firebase -Auth Provider (Google)
const provider = new firebase.auth.GoogleAuthProvider();

export { storage, auth, provider };

export default db;
