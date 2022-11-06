// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJfIXGHbSj1w10CIepiuHz26PMJRpk0Hw",
  authDomain: "chat-app-react-127d1.firebaseapp.com",
  projectId: "chat-app-react-127d1",
  storageBucket: "chat-app-react-127d1.appspot.com",
  messagingSenderId: "487120269009",
  appId: "1:487120269009:web:bac4ec1f31205331905ff0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const db = getFirestore();