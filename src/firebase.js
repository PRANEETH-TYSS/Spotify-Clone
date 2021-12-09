import firebase from "firebase";
//Authentication
import "firebase/auth";

// firestore database
import "firebase/firestore";
//real time database
import "firebase/database";
// storage
import "firebase/storage";
// function
// import 'firebase/function'
// hosting

// Import the functions you need from the SDKs you need

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgho4TB9oISwaPYWO-qvf8O9zGIgR1hKw",
  authDomain: "spotify-clone-90cbf.firebaseapp.com",
  projectId: "spotify-clone-90cbf",
  storageBucket: "spotify-clone-90cbf.appspot.com",
  messagingSenderId: "712471553995",
  appId: "1:712471553995:web:2daa8d72053f7e129ff84e",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
