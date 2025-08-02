// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "task-manager-50402.firebaseapp.com",
  projectId: "task-manager-50402",
  storageBucket: "task-manager-50402.firebasestorage.app",
  messagingSenderId: "424454700805",
  appId: "1:424454700805:web:56efd13b31e537a0c7c16c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);