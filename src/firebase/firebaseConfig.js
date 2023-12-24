// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8GRujYv9KKCRMm3tZwfvqQ-drzslYr60",
  authDomain: "cars-site-db.firebaseapp.com",
  projectId: "cars-site-db",
  storageBucket: "cars-site-db.appspot.com",
  messagingSenderId: "567065209647",
  appId: "1:567065209647:web:3989f4a79911d6ed664fda",
  measurementId: "G-3HQWDEXF93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, getFirestore };
export{app};