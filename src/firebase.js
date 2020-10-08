import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAePVL8dcHnGPS95RNhoya9FvwjSZBvE54",
  authDomain: "mern-messenger-cd2af.firebaseapp.com",
  databaseURL: "https://mern-messenger-cd2af.firebaseio.com",
  projectId: "mern-messenger-cd2af",
  storageBucket: "mern-messenger-cd2af.appspot.com",
  messagingSenderId: "744682447814",
  appId: "1:744682447814:web:201e9332e15ba7e4c408c7",
});

const db = firebaseApp.firestore();

export default db;
