// assets/js/firebase-config.js
// Import Firebase modules directly from CDN (works in browser)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-storage.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa0aRn933SUOZi32S1ul6Ds16nX_zbylo",
  authDomain: "hindi-edtech.firebaseapp.com",
  projectId: "hindi-edtech",
  storageBucket: "hindi-edtech.firebasestorage.app",
  messagingSenderId: "914101966018",
  appId: "1:914101966018:web:dde79f873e2f7965eb175b",
  measurementId: "G-1C87TR18TK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export modules so signup & login pages can use them
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
