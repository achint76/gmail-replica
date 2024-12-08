// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
//import { GoogleAuthProvider } from "firebase/auth/web-extension";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDC1-byNLPCrjdYHVg2tqtt3iWE7W-wlIc",
  authDomain: "replica-67f47.firebaseapp.com",
  projectId: "replica-67f47",
  storageBucket: "replica-67f47.firebasestorage.app",
  messagingSenderId: "1068216017182",
  appId: "1:1068216017182:web:91e828a26422e3a0f3a90f",
  measurementId: "G-6VB63FM6V4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();