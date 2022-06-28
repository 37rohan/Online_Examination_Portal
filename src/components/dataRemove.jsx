import database from "../firebaseAuth";
import { ref } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";


const db = ref(database, "examData");
class deleteData {
    delete(key) {
        return db.child(key).remove();
    }
}

export default new deleteData();