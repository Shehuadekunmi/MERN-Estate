// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-7e440.firebaseapp.com",
  projectId: "mern-estate-7e440",
  storageBucket: "mern-estate-7e440.appspot.com",
  messagingSenderId: "788175345568",
  appId: "1:788175345568:web:a775f7f0e6fd942368f6c5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);