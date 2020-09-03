import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBxaGUe8fs7Rt3Ez6hyyB1NYzkVBtFJF6A",
    authDomain: "messenger-7ef9b.firebaseapp.com",
    databaseURL: "https://messenger-7ef9b.firebaseio.com",
    projectId: "messenger-7ef9b",
    storageBucket: "messenger-7ef9b.appspot.com",
    messagingSenderId: "214395009027",
    appId: "1:214395009027:web:51ecaf9e8c55b2ac173636",
    measurementId: "G-JLNBDTRNS2"


});

const db = firebaseApp.firestore();

export default db;