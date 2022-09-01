import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBXntrzpp6kTCUtQj9U6qhwvA4S0Jhcu_Y",
  authDomain: "chat-app-404ca.firebaseapp.com",
  projectId: "chat-app-404ca",
  storageBucket: "chat-app-404ca.appspot.com",
  messagingSenderId: "1060313160979",
  appId: "1:1060313160979:web:32719675b20242ea180ee6"
};
const app = initializeApp(firebaseConfig);

// Auth and DB connection
export const auth = getAuth(app)
export const db = getFirestore(app)