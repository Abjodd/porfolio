import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC8DF0XCFHsmtIIBuI_RUzUJ5w2ho-g59k",
    authDomain: "portfolio-13d24.firebaseapp.com",
    projectId: "portfolio-13d24",
    storageBucket: "portfolio-13d24.firebasestorage.app",
    messagingSenderId: "196125159538",
    appId: "1:196125159538:web:8fa8410baa8d4e41a992eb",
    measurementId: "G-1KJPF3J7YV"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addMessage = async (name, email, message) => {
    try {
      await addDoc(collection(db, "messages"), {
        name,
        email,
        message,
        timestamp: new Date(),
      });
      console.log("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message: ", error);
    }
  };