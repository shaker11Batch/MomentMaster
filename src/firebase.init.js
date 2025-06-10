// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD89bpQ3Z5gK93sgQrQ1J4mnoCTstHtyX0",
    authDomain: "event-management-69e35.firebaseapp.com",
    projectId: "event-management-69e35",
    storageBucket: "event-management-69e35.firebasestorage.app",
    messagingSenderId: "1553324186",
    appId: "1:1553324186:web:2d727f0b6a59f75195a723"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)