import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "kevin-s-discord-clone.firebaseapp.com",
  projectId: "kevin-s-discord-clone",
  storageBucket: "kevin-s-discord-clone.appspot.com",
  messagingSenderId: "836177137512",
  appId: "1:836177137512:web:01ac27406a24b59aad50dd"
};

const app = initializeApp(firebaseConfig);