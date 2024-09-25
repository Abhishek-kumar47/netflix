// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX2CYQZ8tMO2q97447QHkXVfn23f4VFXg",
  authDomain: "netflixgpt-33a31.firebaseapp.com",
  projectId: "netflixgpt-33a31",
  storageBucket: "netflixgpt-33a31.appspot.com",
  messagingSenderId: "1042315351610",
  appId: "1:1042315351610:web:50212d66a563050c0f8703",
  measurementId: "G-B2ZTT0FM8X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();