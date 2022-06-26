import React from "react";
import { Button, Table } from "react-bootstrap";
import database from "../firebaseAuth";
import { ref, onValue } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";

class RealtimeData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: []
        }
    }


    componentDidMount() {
        const starCountRef = ref(database, 'examData/');
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
                    <tr>
                        <th>
                            <h2>
                                List of Exams
                            </h2>
                        </th>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <th>ID</th>
                        {/* <th>Username</th> */}
                        <th>Exam Name</th>
                        <th>Exam Date</th>
                        <th>Exam Level</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {this.state.tableData.map(((row, index) => {
                        return (
                            <tr>
                                <td> {index} </td>
                                {/* <td>{row.key} </td> */}
                                <td>{row.data.examName}  </td>
                                <td>{row.data.examDate}  </td>
                                <td>{row.data.examLevel} </td>
                                <td>{[<Button>Delete</Button>,<Button>Update</Button>]} </td>
                            </tr>
                        )
                    }))}
                </tbody>
            </Table >
        )
    };
}


export default RealtimeData;