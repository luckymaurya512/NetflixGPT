// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWBDwaZKJMCwTHkQLUq8dJ-3PZcfnCObI",
  authDomain: "fir-test-443b5.firebaseapp.com",
  projectId: "fir-test-443b5",
  storageBucket: "fir-test-443b5.firebasestorage.app",
  messagingSenderId: "980657251687",
  appId: "1:980657251687:web:3fa58252b04c00102f7bc2",
  measurementId: "G-XL6BWKM011"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
