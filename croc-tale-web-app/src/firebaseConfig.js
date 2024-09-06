// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'; 
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPI-T5xUW4757OUlJfgqiop1isGk833KU",
  authDomain: "croc-tales.firebaseapp.com",
  projectId: "croc-tales",
  storageBucket: "croc-tales.appspot.com",
  messagingSenderId: "150375486075",
  appId: "1:150375486075:web:04bad91466b231603cc8de",
  measurementId: "G-6YYEQB776S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase services and export them
const auth = getAuth(app); 

export { auth, app, analytics }; 