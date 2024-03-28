// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkSlVM3lYy6uxoRN-Mtarb1Fu3-bXfqrw",
  authDomain: "netflixgpt-408d5.firebaseapp.com",
  projectId: "netflixgpt-408d5",
  storageBucket: "netflixgpt-408d5.appspot.com",
  messagingSenderId: "825123488052",
  appId: "1:825123488052:web:9972721cc5cb3fc70e2561",
  measurementId: "G-7DTB1RMWY9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line 
const analytics = getAnalytics(app);
export const auth = getAuth();

