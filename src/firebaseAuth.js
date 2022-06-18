// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoVPDYioVDielOHiYM13EZ5Mxgw5Y-2JA",
  authDomain: "online-examination-porta-a7074.firebaseapp.com",
  projectId: "online-examination-porta-a7074",
  storageBucket: "online-examination-porta-a7074.appspot.com",
  messagingSenderId: "147371085271",
  appId: "1:147371085271:web:9cf2f1069453578cb6cf92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
