import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM9zsRvPXtMaGbRrPg14uR27vSsGozLx8",
  authDomain: "shawn-leonard-personal-website.firebaseapp.com",
  projectId: "shawn-leonard-personal-website",
  storageBucket: "shawn-leonard-personal-website.appspot.com",
  messagingSenderId: "536122576522",
  appId: "1:536122576522:web:8f714558ec6b9fff26a773",
  measurementId: "G-LP9HPX9851"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);