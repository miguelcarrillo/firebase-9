// Import the functions you need from the SDKs you need
import {
  initializeApp
} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCANcxG01SiACxdD7DVh07iQEtrLuI9_o",
  authDomain: "mitivi-c4e7e.firebaseapp.com",
  projectId: "mitivi-c4e7e",
  storageBucket: "mitivi-c4e7e.appspot.com",
  messagingSenderId: "373461202669",
  appId: "1:373461202669:web:6fba70f0aae6b8bebe3ee4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const colRef = collection(db, 'materials');

getDocs(colRef)
  .then((snapshot) => {
    let materials = [];
    snapshot.docs.forEach((doc) => {
      materials.push({
        ...doc.data(),
        id: doc.id
      })
    })
    console.log(materials)
  })
  .catch((err) => {
    console.log(err.message);
  })