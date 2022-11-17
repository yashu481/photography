import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
 
// Initialize Firebase
const app = initializeApp ({
  apiKey: "AIzaSyDGAwYBFAD9Obm1aUYfbkM-cCk2e5S371w",
  authDomain: "gallery-7b3f6.firebaseapp.com",
  projectId: "gallery-7b3f6",
  storageBucket: "gallery-7b3f6.appspot.com",
  messagingSenderId: "859164866230",
  appId: "1:859164866230:web:0d732df1c28aafe9559817",
  measurementId: "G-LEXSJ7WKT0"
});
 
// Firebase storage reference
export const storage = getStorage(app);