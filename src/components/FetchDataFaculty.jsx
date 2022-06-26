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
        const starCountRef = ref(database, 'facultyData/');
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
    // const data = snapshot.val();
    // const key = Object.keys(snapshot.val());
    // key.forEach(myfunc)
    // function myfunc(item) {
    //     items += item
    // }         
    // var keys = myfunc()
    // console.log(keys); 


    render() {
        return (
            <Table>
                <thead>
                    <center>
                        <b>
                            List of Added Faculties
                        </b>
                    </center>
                </thead>
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