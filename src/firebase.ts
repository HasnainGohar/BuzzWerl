// firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyClvF9PvdNCifq0lU3r-rwQSK_5NuuuTQE",
    authDomain: "buzzwerl-backend.firebaseapp.com",
    databaseURL: "https://buzzwerl-backend-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "buzzwerl-backend",
    storageBucket: "buzzwerl-backend.appspot.com",
    messagingSenderId: "106505477405",
    appId: "1:106505477405:web:6fde1a8b5c363bcd85d5f4",
    measurementId: "G-WWX2XND7BJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
