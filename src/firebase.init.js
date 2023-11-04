// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}from 'firebase/auth'
// Import the functions you need from the SDKs you need
const firebaseConfig = {
  apiKey: "AIzaSyBhogPPA222eJe5kRm8k8iJ5VoCw-jb5Ys",
  authDomain: "wizard-stock-exchange-7a44d.firebaseapp.com",
  projectId: "wizard-stock-exchange-7a44d",
  storageBucket: "wizard-stock-exchange-7a44d.appspot.com",
  messagingSenderId: "129353335057",
  appId: "1:129353335057:web:d16a9bc4a30cd0d1cd4cb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;