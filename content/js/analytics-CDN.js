// Linkeo con Firebase/Google Analytics
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCfEjYGlavAvqTJdGlNFxQfoupLQRzdt8E",
    authDomain: "assist-card-001.firebaseapp.com",
    databaseURL: "https://assist-card-001.firebaseio.com",
    projectId: "assist-card-001",
    storageBucket: "assist-card-001.appspot.com",
    messagingSenderId: "32892471193",
    appId: "1:32892471193:web:3e926bf63cde6ab184b508",
    measurementId: "G-DBW3722TTV"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);