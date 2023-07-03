// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA48274QcP6DICkmc8fzrHOCoJnh0j-OOE",
  authDomain: "e-commerce-react-vite.firebaseapp.com",
  projectId: "e-commerce-react-vite",
  storageBucket: "e-commerce-react-vite.appspot.com",
  messagingSenderId: "818802547164",
  appId: "1:818802547164:web:dd72a632074a8e95105719"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);