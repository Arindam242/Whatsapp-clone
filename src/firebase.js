import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAOlaAqRzIQqUnh2fZfjCvQDlHQZrBX7wo",

  authDomain: "whatsapp-clone-a932a.firebaseapp.com",

  projectId: "whatsapp-clone-a932a",

  storageBucket: "whatsapp-clone-a932a.appspot.com",

  messagingSenderId: "1083909671858",

  appId: "1:1083909671858:web:dd307a1c2df5d73e9cb2ab",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage().ref("images");
const audioStorage = firebase.storage().ref("audios");
const createTimestamp = firebase.firestore.FieldValue.serverTimestamp;
const serverTimestamp = firebase.database.ServerValue.TIMESTAMP;

export {
  db,
  auth,
  provider,
  storage,
  audioStorage,
  createTimestamp,
  serverTimestamp,
};
