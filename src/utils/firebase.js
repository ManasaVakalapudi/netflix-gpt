// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBjjFC8xjt5Bdnt716gGVQDF9MVFQsEaw",
  authDomain: "netflixgpt-59cce.firebaseapp.com",
  projectId: "netflixgpt-59cce",
  storageBucket: "netflixgpt-59cce.firebasestorage.app",
  messagingSenderId: "611754791600",
  appId: "1:611754791600:web:139be70be68cde9a5be175",
  measurementId: "G-JN8ERNHNP0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();