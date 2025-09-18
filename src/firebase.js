// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {

  apiKey: "AIzaSyCittUdSJU7shkxYO0jUgtFhk-tyspVspQ",
  authDomain: "dpspalladio.firebaseapp.com",
  databaseURL:"https://dpspalladio-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dpspalladio",
  storageBucket: "dpspalladio.firebasestorage.app",
  messagingSenderId: "227430556675",
  appId: "1:227430556675:web:fac125b550b9ca9ebb5a36",
  measurementId: "G-7R4P8Y8ZPQ",
};

const app = initializeApp(firebaseConfig);

// ✅ Auth & DB
export const auth = getAuth(app);
export const database = getDatabase(app);

// ✅ Sign in anonymously at startup (so `.read` rules work)
signInAnonymously(auth).catch((error) => {
  console.error("Anonymous sign-in failed:", error.code, error.message);
});
