import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyALJ4IvoM0ZQ7B3UlGrGf8BJxP44-SaA-w",
  authDomain: "routeax-carax.firebaseapp.com",
  databaseURL: "https://routeax-carax.firebaseio.com",
  projectId: "routeax-carax",
  storageBucket: "routeax-carax.appspot.com",
  messagingSenderId: "95886086992",
  appId: "1:95886086992:web:88da01797f49455e671255",
  measurementId: "G-FZY4Z6X2M0"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();
export const auth = firebase.auth();
export const fb = firebase;
export default db;
