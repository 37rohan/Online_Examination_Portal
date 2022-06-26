import RealtimeData from "../components/FetchExamData";
import NavAdmin from "../components/NavAdmin";
import RegisterExam from "../components/RegisterExam";

export default function ExamSchedule() {
    return (
        <div>
            <NavAdmin />
            <center>
                <h5 className="h5">For Adding Exam Click Button Below</h5>
                <RegisterExam />
            </center>
            <RealtimeData />
        </div>
    );
}