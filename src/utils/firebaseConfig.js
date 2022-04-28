// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore}  from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbiRKOBczlmzF1KnOELN37IaqVnT6N2JI",
  authDomain: "essen-3b694.firebaseapp.com",
  projectId: "essen-3b694",
  storageBucket: "essen-3b694.appspot.com",
  messagingSenderId: "415822136083",
  appId: "1:415822136083:web:6d5f7a1a94497437d9d0e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;