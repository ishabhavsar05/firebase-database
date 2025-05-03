// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// ✅ તારું Firebase project config અહીં મુક
const firebaseConfig = {
  apiKey: "AIzaSyASe0nEbChC5T2vdJ5Ua19CgJDs2YwnKL0",
  authDomain: "fir-database-e1f18.firebaseapp.com",
  projectId: "fir-database-e1f18",
  storageBucket: "fir-database-e1f18.appspot.com",
  messagingSenderId: "569721732569",
  appId: "1:569721732569:web:aece7651a375605520edc8"
};

// ✅ Firebase app initialize કરો
const app = initializeApp(firebaseConfig);

// ✅ Authentication અને Google Provider export કરો
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
