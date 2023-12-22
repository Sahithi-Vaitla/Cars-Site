// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDE9oZEyA2SlGCHLCbesOuBhQkpAP67haM",
  authDomain: "second-hand-cars-website.firebaseapp.com",
  projectId: "second-hand-cars-website",
  storageBucket: "second-hand-cars-website.appspot.com",
  messagingSenderId: "497806145110",
  appId: "1:497806145110:web:863becd7f2eee685d16df7",
  measurementId: "G-6X8KMTGRXX"
  // databaseURL: "https://second-hand-cars-website-default-rtdb.firebaseio.com/"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;