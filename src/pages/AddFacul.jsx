import RealtimeData from "../components/FetchDataFaculty";
import NavAdmin from "../components/NavAdmin";
import RegisterFY from "../components/RegisterFY";
import '../pages.css/AddStudent.css'


export default function AddFaculty() {
    return (
        <div>
            <NavAdmin />
            <center>
                <h5 className="h5">For Adding Faculty Click Button Below</h5>
                <RegisterFY />
            </center>
            <RealtimeData />
        </div>
    );
}