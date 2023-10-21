// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "kevindiscordclone.firebaseapp.com",
  projectId: "kevindiscordclone",
  storageBucket: "kevindiscordclone.appspot.com",
  messagingSenderId: "1086288115599",
  appId: "1:1086288115599:web:2f9cbe1638cd866fd67dfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);