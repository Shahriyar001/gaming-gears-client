// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId,
    apiKey: "AIzaSyDyFcsFLzb3RV4hITppXpOLpq8H4SWTu8g",
    authDomain: "gaming-gears-resale.firebaseapp.com",
    projectId: "gaming-gears-resale",
    storageBucket: "gaming-gears-resale.appspot.com",
    messagingSenderId: "117584752830",
    appId: "1:117584752830:web:191c6514fe64d2d498aeef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;