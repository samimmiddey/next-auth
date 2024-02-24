import { initializeApp } from "firebase/app";
import { initializeAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCXOLo2pZNWuirm7BJVheX2KdHyHSZEKqc",
    authDomain: "auth-project-83a52.firebaseapp.com",
    databaseURL: "https://auth-project-83a52-default-rtdb.firebaseio.com",
    projectId: "auth-project-83a52",
    storageBucket: "auth-project-83a52.appspot.com",
    messagingSenderId: "142365732180",
    appId: "1:142365732180:web:53007550aea1fe012f6cc1",
    measurementId: "G-C8D9D71DBN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth Service
const auth = initializeAuth(app);

export { auth };