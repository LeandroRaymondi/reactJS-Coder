import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDT9lMQSI6s7uezZNRdCY8N67_RbGgOYXA",
  authDomain: "reactjs-coder-588cc.firebaseapp.com",
  projectId: "reactjs-coder-588cc",
  storageBucket: "reactjs-coder-588cc.appspot.com",
  messagingSenderId: "872212103188",
  appId: "1:872212103188:web:2cadb748775cb9abf9e701"
};
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
