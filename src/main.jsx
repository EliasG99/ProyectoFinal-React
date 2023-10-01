import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9m8VU4Kx-SSl3mc3j-GsJcf4_C7eu_3I",
  authDomain: "proyecto-react-988c8.firebaseapp.com",
  projectId: "proyecto-react-988c8",
  storageBucket: "proyecto-react-988c8.appspot.com",
  messagingSenderId: "947435197925",
  appId: "1:947435197925:web:66078563c985a161814b0c"
};

// Initialize Firebase
initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
