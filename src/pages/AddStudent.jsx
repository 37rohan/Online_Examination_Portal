import NavAdmin from "../components/NavAdmin";
import { Table, Nav } from 'react-bootstrap'
import RegisterST from "../components/RegisterST";
import '../pages.css/AddStudent.css'


export default function AddStudent() {
    return (
        <div>
            <NavAdmin />
            <center>
                <h5 className="h5">For Adding Students Click Button Below</h5>
                <RegisterST />
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
                        </tr>
                    </thead>
                </Table>
            </div>
        </div>
    );
}