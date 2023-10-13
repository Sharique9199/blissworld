// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrqZIC1Asj1J9z3mljpYTb9zFKjZqeDAw",
  authDomain: "veganessclone-ca678.firebaseapp.com",
  projectId: "veganessclone-ca678",
  storageBucket: "veganessclone-ca678.appspot.com",
  messagingSenderId: "253688942454",
  appId: "1:253688942454:web:07e69d68a376427630f457",
  measurementId: "G-Z90EB6P38H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
// const analytics = getAnalytics(app);
const provider=new GoogleAuthProvider();
export {auth,provider}
// const analytics = getAnalytics(app);