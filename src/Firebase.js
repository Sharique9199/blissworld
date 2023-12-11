// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDC5Wt8UDGNXaMoImX40WWKtC7tp-yvpIg",
  authDomain: "blissworld-423b8.firebaseapp.com",
  projectId: "blissworld-423b8",
  storageBucket: "blissworld-423b8.appspot.com",
  messagingSenderId: "813501336520",
  appId: "1:813501336520:web:d5742a22924dde7051cefd",
  measurementId: "G-5QB5MDNLDY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth=getAuth();
export {app,auth};