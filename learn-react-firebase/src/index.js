import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const app = initializeApp({
  apiKey: "AIzaSyCnvA08Nem_hN7m_pW4mJ37Jn4Zr3w864w",
  authDomain: "learn-react-firebase-466cf.firebaseapp.com",
  projectId: "learn-react-firebase-466cf",
  storageBucket: "learn-react-firebase-466cf.appspot.com",
  messagingSenderId: "684634266216",
  appId: "1:684634266216:web:4cd4d49d172cff45cf39dd",
  measurementId: "G-7XX429PR69",
});

export const Context = createContext(null);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const firestore = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context.Provider value={{ firestore, auth }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
