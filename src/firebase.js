// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO7MboGzuKG81CVoponj46reiSx5jHsXM",
  authDomain: "mhcow-a6adf.firebaseapp.com",
  projectId: "mhcow-a6adf",
  storageBucket: "mhcow-a6adf.appspot.com",
  messagingSenderId: "811108778342",
  appId: "1:811108778342:web:dce6661c58f75e37ec48a7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const firestore = getFirestore(app);
export { storage, firestore };
