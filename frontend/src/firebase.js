// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj8yk46tbzplDSM6d09A8rvajLE6OAlPU",
  authDomain: "fit-track-core-springboot.firebaseapp.com",
  projectId: "fit-track-core-springboot",
  storageBucket: "fit-track-core-springboot.firebasestorage.app",
  messagingSenderId: "151143797341",
  appId: "1:151143797341:web:12582b591807b624d7b3b4",
  measurementId: "G-QG40QYVCH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
