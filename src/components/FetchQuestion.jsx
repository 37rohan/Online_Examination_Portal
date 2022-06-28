import React from "react";
import { Table } from "react-bootstrap";
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
        const starCountRef = ref(database, 'QuestionData/');
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
                            <h2>List of Added Students</h2>
                        </th>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <th>ID</th>
                        {/* <th>Username</th> */}
                        <th>Enter Question</th>
                        <th>Option A</th>
                        <th>Option B</th>
                        <th>Option C</th>
                        <th>Option D</th>
                        <th>Question Answer</th>
                        <th>Subject</th>
                    </tr>
                </thead>

                <tbody>
                    {this.state.tableData.map(((row, index) => {
                        return (
                            <tr>
                                <td> {index} </td>
                                {/* <td>{row.key} </td> */}
                                <td>{row.data.enterQuestion} </td>
                                <td>{row.data.optionA}  </td>
                                <td>{row.data.optionB}   </td>
                                <td>{row.data.optionC}   </td>
                                <td>{row.data.optionD}   </td>
                                <td>{row.data.queAnswer}   </td>
                                <td>{row.data.subject}   </td>
                            </tr>
                        )
                    }))}
                </tbody>
            </Table >
        )
    };
}


export default RealtimeData;