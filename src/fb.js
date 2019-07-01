import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCg0c3udhzbpFfCdTxdiDYqEZJZvPkEh-o",
  authDomain: "todo-robin.firebaseapp.com",
  databaseURL: "https://todo-robin.firebaseio.com",
  projectId: "todo-robin",
  storageBucket: "todo-robin.appspot.com",
  messagingSenderId: "268567895932",
  appId: "1:268567895932:web:34ba5e890c3b3ecd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

export default db;