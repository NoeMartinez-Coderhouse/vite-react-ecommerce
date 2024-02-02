import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhLGWBZB0agdMsH79nGDwNm1CfH7ZBiBw",
  authDomain: "vite-react-ecommerce.firebaseapp.com",
  projectId: "vite-react-ecommerce",
  storageBucket: "vite-react-ecommerce.appspot.com",
  messagingSenderId: "639056197357",
  appId: "1:639056197357:web:57d0c7bcc5fe803b043ee4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);