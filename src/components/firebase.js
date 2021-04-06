import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDltTv5vB49MewTqP-onckMg3H9KcHPSnQ",
  authDomain: "trying-react-firebase-hooks.firebaseapp.com",
  projectId: "trying-react-firebase-hooks",
  storageBucket: "trying-react-firebase-hooks.appspot.com",
  messagingSenderId: "82809563262",
  appId: "1:82809563262:web:7e261435ce08c1c6de502f",
};
// Initialize Firebase
let fb = firebase.initializeApp(firebaseConfig);

export { fb };
