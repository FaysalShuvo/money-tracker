import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAsy4E-bHj-3tyMINVyLCpwQbRYnPV4CE",
  authDomain: "money-tracker-8c52e.firebaseapp.com",
  projectId: "money-tracker-8c52e",
  storageBucket: "money-tracker-8c52e.appspot.com",
  messagingSenderId: "848739500821",
  appId: "1:848739500821:web:ab81b7c5cf5ba44abd5f1c",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
