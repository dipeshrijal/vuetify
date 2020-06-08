import firebase from "firebase/app"
// // Required for side-effects
require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyA5kLoscaepvu7Fq0VUIxogUrCKZgtmK7c",
    authDomain: "todo-b6a4f.firebaseapp.com",
    databaseURL: "https://todo-b6a4f.firebaseio.com",
    projectId: "todo-b6a4f",
    storageBucket: "todo-b6a4f.appspot.com",
    messagingSenderId: "854421388329",
    appId: "1:854421388329:web:6fe1aed4a7d379362af038",
    measurementId: "G-Q92WM6XTTZ"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export default db;

