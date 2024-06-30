import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAW8WGnFno_8jwWNJUWZ9TfxCEI6S43Pr8",
  authDomain: "react-final-badb2.firebaseapp.com",
  projectId: "react-final-badb2",
  storageBucket: "react-final-badb2.appspot.com",
  messagingSenderId: "563553173485",
  appId: "1:563553173485:web:7b34a7f384ebad9933f1e4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
