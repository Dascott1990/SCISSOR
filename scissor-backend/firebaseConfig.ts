import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';  // Add this import for auth

const firebaseConfig = {
  apiKey: "AIzaSyBTOnTMvcEgsKEjBmnnB2o3o0GtZUjZjWY",
  authDomain: "scissor-e9b8a.firebaseapp.com",
  projectId: "scissor-e9b8a",
  storageBucket: "scissor-e9b8a.appspot.com",
  messagingSenderId: "699513398940",
  appId: "1:699513398940:web:699c6decbf15b01a52ef59",
  measurementId: "G-L9LEWJ5E7B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore instance
export const db = getFirestore(app);

// Export Firebase Auth instance (this will resolve your import issue)
export const auth = getAuth(app);
