// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD2rqtRafmQCY0Ua1bR23e_gVX9L1eAeVc",
    authDomain: "weighttracker-b1147.firebaseapp.com",
    projectId: "weighttracker-b1147",
    storageBucket: "weighttracker-b1147.appspot.com",
    messagingSenderId: "940348102181",
    appId: "1:940348102181:web:e05e2655ccbb3ac13991cc",
    measurementId: "G-GQD002DQFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

let array = [];

const querySnapshot = await getDocs(collection(db, "tracker"));
querySnapshot.forEach((doc) => {
  array.push(doc.data());
  console.log(array);
});
