import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnqWKVOOVRe1Z8NRy187pv1YxjE5hhjvw",
  authDomain: "login-app-6a3f1.firebaseapp.com",
  projectId: "login-app-6a3f1",
  storageBucket: "login-app-6a3f1.appspot.com",
  messagingSenderId: "701326252778",
  appId: "1:701326252778:web:9ef55fa072cdaf30329593",
};

initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();

// Initialize Firebase
export { auth, provider, signInWithPopup };
