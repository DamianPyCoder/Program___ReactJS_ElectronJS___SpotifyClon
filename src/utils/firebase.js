import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

// CÓDIGO DEL FIREBASE

};



// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const initFirebase = initializeApp(firebaseConfig);

export const db = getFirestore(initFirebase);
