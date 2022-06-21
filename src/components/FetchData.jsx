import React from "react";
import StartFirebase from "../firebaseAuth";
// import { ref, onValue } from "firebase/database";
import { Table } from "react-bootstrap";


export class RealtimeData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: []
        }
    }

    componentDidMount() {
        StartFirebase.ref("facultyData").on("value", snapshot => {
            let records = [];
            snapshot.forEach(childSnapshot => {
                records.push(childSnapshot.val());
            });
            this.setState({ tableData: records });
        });
    }

    render() {
        return (
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>firstName</th>
                        <th>lastName</th>
                        <th>emailId</th>
                    </tr>
                </thead>

                <tbody>
                    {this.state.tableData.map((data => {
                        return (
                            <tr>
                                <td> {data.index} </td>
                                <td>{data.key} </td>
                                <td>{data.firstName} </td>
                                <td>{data.lastName}  </td>
                                <td>{data.emailID}   </td>
                            </tr>
                        )}))}
                </tbody>
            </Table >
        )
    }
} 