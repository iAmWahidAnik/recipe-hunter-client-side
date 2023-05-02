// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3mbipfAqjc9g8_DPn6EjudPwQSy_wDRk",
  authDomain: "cuisine-s-chef.firebaseapp.com",
  projectId: "cuisine-s-chef",
  storageBucket: "cuisine-s-chef.appspot.com",
  messagingSenderId: "1096561876585",
  appId: "1:1096561876585:web:5075cf3a9b1dc8b1d9ccf8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;