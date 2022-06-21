import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"


const firebaseConfig = {
  apiKey: "AIzaSyDoVPDYioVDielOHiYM13EZ5Mxgw5Y-2JA",
  authDomain: "online-examination-porta-a7074.firebaseapp.com",
  databaseURL: "https://online-examination-porta-a7074-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "online-examination-porta-a7074",
  storageBucket: "online-examination-porta-a7074.appspot.com",
  messagingSenderId: "147371085271",
  appId: "1:147371085271:web:9cf2f1069453578cb6cf92"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const StartFirebase = getDatabase(app);

export { auth, app }
export default StartFirebase;