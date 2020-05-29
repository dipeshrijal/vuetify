import firebase from 'firebase/app'
import 'firebase/firestore'


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA5kLoscaepvu7Fq0VUIxogUrCKZgtmK7c",
    authDomain: "todo-b6a4f.firebaseapp.com",
    databaseURL: "https://todo-b6a4f.firebaseio.com",
    projectId: "todo-b6a4f",
    storageBucket: "todo-b6a4f.appspot.com",
    messagingSenderId: "854421388329",
    appId: "1:854421388329:web:6fe1aed4a7d379362af038",
    measurementId: "G-Q92WM6XTTZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const db = firebase.firestore();

export default db;