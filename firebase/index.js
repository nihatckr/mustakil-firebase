// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0iLgummruFFH-fFP7YQ3TlB8lsRaYJFY",
  authDomain: "mustakil-f4696.firebaseapp.com",
  projectId: "mustakil-f4696",
  storageBucket: "mustakil-f4696.appspot.com",
  messagingSenderId: "406767840546",
  appId: "1:406767840546:web:2a3fd535fa1d08ec9ec97b",
  measurementId: "G-NEMJC32YBF",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getFirestore(app);
