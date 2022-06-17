import NavAdmin from "../components/NavAdmin";
import { Table, Nav } from 'react-bootstrap'
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
            <div className="addSTUD">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th><Nav.Link className="btn3">ID</Nav.Link></th>
                            <th><Nav.Link className="btn3">First Name</Nav.Link></th>
                            <th><Nav.Link className="btn3">Last Name</Nav.Link></th>
                            <th><Nav.Link className="btn3">Email ID</Nav.Link></th>
                            <th><Nav.Link className="btn3">Block</Nav.Link></th>
                            <th><Nav.Link className="btn3">Un Block</Nav.Link></th>
                            <th><Nav.Link className="btn3">Remove</Nav.Link></th>
                        </tr>
                    </thead>
                </Table>
            </div>
        </div>
    );
}