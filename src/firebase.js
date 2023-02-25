// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsCYR_9OMX1t1RfYK1LrB2AAyQDtpFMfc",
  authDomain: "soulful-9ffe7.firebaseapp.com",
  projectId: "soulful-9ffe7",
  storageBucket: "soulful-9ffe7.appspot.com",
  messagingSenderId: "146735160264",
  appId: "1:146735160264:web:2324f5c8c1e52f7081fefd",
  measurementId: "G-76N9VVY0EV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };
