// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore" ;

import {getAuth , GoogleAuthProvider} from "firebase/auth" ;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSx-Ar4AoS2lSAHLWve-kBQK5Bv6QdfMc",
  authDomain: "blog-app-1896f.firebaseapp.com",
  projectId: "blog-app-1896f",
  storageBucket: "blog-app-1896f.appspot.com",
  messagingSenderId: "514757884103",
  appId: "1:514757884103:web:72739e1f7e3c4a65e266e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app) ;

export const auth = getAuth(app) ;
export const provider = new GoogleAuthProvider() ;