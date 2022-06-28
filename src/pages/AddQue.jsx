import NavAdmin from "../components/NavAdmin";
import AddQuestion from "../components/AddQue";
import RealtimeData from "../components/FetchQuestion";
export default function AddQue() {
    return (
        <div>
            <NavAdmin />
            <center>
                <h5 className="h5">For Adding Students Click Button Below</h5>
                <AddQuestion />
            </center>
            <RealtimeData />
        </div>
    );
}