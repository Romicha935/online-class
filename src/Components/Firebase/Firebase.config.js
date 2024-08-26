// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLKVw5uuQOIAbteIWHjC05q0lGCnW6Iqg",
  authDomain: "online-class-5f780.firebaseapp.com",
  projectId: "online-class-5f780",
  storageBucket: "online-class-5f780.appspot.com",
  messagingSenderId: "1096949273238",
  appId: "1:1096949273238:web:359dfea4f7e7075a81a8b7",
  measurementId: "G-83C4CGEDB9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);