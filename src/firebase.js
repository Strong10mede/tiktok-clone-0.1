import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB50esWkdd1Wdjf6WTftHMOXZqLFCA4z_U",
  authDomain: "tiktok-clone-eae75.firebaseapp.com",
  projectId: "tiktok-clone-eae75",
  storageBucket: "tiktok-clone-eae75.appspot.com",
  messagingSenderId: "310008146804",
  appId: "1:310008146804:web:ea9feb7422eb4b1768da21",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
