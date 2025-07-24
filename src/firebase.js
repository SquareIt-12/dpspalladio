import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, push } from "firebase/database";

// ✅ Make sure you replace "your-messagingSenderId" and "your-app-id"
const firebaseConfig = {
  apiKey: "AIzaSyD4Tg6RkezJwkHd1qgMfhVEYWkD6odoqyM",
  authDomain: "rishitamulberry-10164.firebaseapp.com",
  databaseURL: "https://rishitamulberry-10164-default-rtdb.firebaseio.com",
  projectId: "rishitamulberry-10164",
  storageBucket: "rishitamulberry-10164.firebasestorage.app",
  messagingSenderId: "212171018241",
  appId: "1:212171018241:web:f8c3f6cf58cece7fe5f000",
  measurementId: "G-B60L9JTS64",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app); // ✅ Rename to match your component

export {ref, push}