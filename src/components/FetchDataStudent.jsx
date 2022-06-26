import React from "react";
import { Table } from "react-bootstrap";
import database from "../firebaseAuth";
import { ref, onValue } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js";

class RealtimeData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: []
        }
    }


    componentDidMount() {
        const starCountRef = ref(database, 'studentData/');
        onValue(starCountRef, (snapshot) => {
            let records = [];
            snapshot.forEach(childSnapshot => {
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({ "key": keyName, "data": data });
            });
            this.setState({ tableData: records })
        });
    };

    render() {
        return (
            <Table>
                <thead>
                    <center>
                        <b>
                            List of Added Students
                        </b>
                    </center>
                </thead>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Id</th>
                        <th>Block</th>
                        <th>Un Block</th>
                    </tr>
                </thead>

                <tbody>
                    {this.state.tableData.map(((row, index) => {
                        return (
                            <tr>
                                <td> {index} </td>
                                <td>{row.key} </td>
                                <td>{row.data.firstName} </td>
                                <td>{row.data.lastName}  </td>
                                <td>{row.data.emailId}   </td>
                            </tr>
                        )
                    }))}
                </tbody>
            </Table >
        )
    };
}


export default RealtimeData;