// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDatabase, ref as dbRef, set } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAAVnabbOhdUZM6UsvL16PfetrP9uNxYA",
  authDomain: "you-app-image.firebaseapp.com",
  databaseURL: "https://you-app-image-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "you-app-image",
  storageBucket: "you-app-image.appspot.com",
  messagingSenderId: "149520622026",
  appId: "1:149520622026:web:987f0b37d19cc59e1c2f33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getDatabase(app);

