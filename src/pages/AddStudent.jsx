import NavAdmin from "../components/NavAdmin";
import RegisterST from "../components/RegisterST";
import '../pages.css/AddStudent.css'
import RealtimeData from "../components/FetchDataStudent";


export default function AddStudent() {
    return (
        <div>
            <NavAdmin />
            <center>
                <h5 className="h5">For Adding Students Click Button Below</h5>
                <RegisterST />
            </center>
            <RealtimeData />
        </div>
    );
}