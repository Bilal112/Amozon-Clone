import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyASoWytdBwfzDEu4NDWVGkOxDckXe4Czq8",
  authDomain: "amozon-clone-f48ad.firebaseapp.com",
  databaseURL: "https://amozon-clone-f48ad.firebaseio.com",
  projectId: "amozon-clone-f48ad",
  storageBucket: "amozon-clone-f48ad.appspot.com",
  messagingSenderId: "445352820330",
  appId: "1:445352820330:web:a725ff72e67c25f38e9413",
  measurementId: "G-9YK6LVQ2F8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };