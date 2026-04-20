// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBm_ELabEAyVdKxJAUnYuHmcGTYX8IvJ4s",
  authDomain: "hitler-store-3cabb.firebaseapp.com",
  projectId: "hitler-store-3cabb",
  storageBucket: "hitler-store-3cabb.firebasestorage.app"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);