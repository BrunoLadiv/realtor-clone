// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnH3EMGqk6Adddreh82ngIrkLT3RVLgk4",
  authDomain: "realtor-clone-react-project.firebaseapp.com",
  projectId: "realtor-clone-react-project",
  storageBucket: "realtor-clone-react-project.appspot.com",
  messagingSenderId: "942761409867",
  appId: "1:942761409867:web:3bd04934aeceddc8b77cce"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()