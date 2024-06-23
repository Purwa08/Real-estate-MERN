// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-71ca0.firebaseapp.com",
  projectId: "mern-estate-71ca0",
  storageBucket: "mern-estate-71ca0.appspot.com",
  messagingSenderId: "584600472868",
  appId: "1:584600472868:web:846ee5f13758446fcaf7b1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);