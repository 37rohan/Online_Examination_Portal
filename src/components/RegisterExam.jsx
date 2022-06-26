import { useState } from "react";
import { Button } from "reactstrap";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { Col, Form, Row } from 'react-bootstrap';


export default function RegisterFY() {
    const [modal, setModal] = useState(false) // For creating popup
    const [userData, setUserData] = useState({  // from connecting form fields to firebase
        examName: "",
        examDate: "",
        examLevel: "",
    });

    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUserData({ ...userData, [name]: value }) // Dynamically changing the data which user try to write in the form field
    }

    //Connecting Database with FireBase
    const submitData = async (event) => {
        event.preventDefault();
        const { examName, examDate, examLevel, totalNum, totalQue, passMarks } = userData;
        if (examName && examDate && examLevel && totalNum && totalQue && passMarks) {


            const data = await fetch('https://online-examination-porta-a7074-default-rtdb.asia-southeast1.firebasedatabase.app/examData.json',
                {
                    method: "POST",
                    headers: {
                        "content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        examName,
                        examDate,
                        examLevel,
                        totalNum,
                        totalQue,
                        passMarks,
                    }),
                }
            );
            if (data) {
                setUserData({
                    examName: "",
                    examDate: "",
                    examLevel: "",
                    totalNum: "",
                    totalQue: "",
                    passMarks: "",
                });
                alert("Data Stored");
            } else {
                alert("Please Fill it Again");
            }
        } else {
            alert("There's an Empty Field");
        }
    };

    return (
        <>
            <Modal size="lg" isOpen={modal} toggle={() => setModal(!modal)}>
                <ModalHeader toggle={() => setModal(!modal)}>
                    Add Exams
                </ModalHeader>
                <ModalBody>
                    <Form method="POST">
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Exam Name</Form.Label>
                                <Form.Control type="text"
                                    placeholder="Python"
                                    value={userData.examName}
                                    onChange={postUserData}
                                    name="examName" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Exam Date</Form.Label>
                                <Form.Control type="date"
                                    placeholder="dd/mm/yyyy"
                                    value={userData.examDate}
                                    onChange={postUserData}
                                    name="examDate" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Total Marks</Form.Label>
                                <Form.Control type="number"
                                    placeholder="100"
                                    value={userData.totalNum}
                                    onChange={postUserData}
                                    name="totalNum" />
                            </Form.Group><br />

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Total Question</Form.Label>
                                <Form.Control type="number"
                                    placeholder="50"
                                    value={userData.totalQue}
                                    onChange={postUserData}
                                    name="totalQue" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Passing Marks</Form.Label>
                                <Form.Control type="number"
                                    placeholder="30"
                                    value={userData.passMarks}
                                    onChange={postUserData}
                                    name="passMarks" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Exam Level</Form.Label>
                                <Form.Control type="text"
                                    placeholder="easy"
                                    value={userData.examLevel}
                                    onChange={postUserData}
                                    name="examLevel" />
                            </Form.Group>
                        </Row>
                        <Button type="submit" onClick={submitData} >
                            Submit
                        </Button>
                    </Form>
                </ModalBody>
            </Modal>

            <Button onClick={() => setModal(true)}>
                Add Exam
            </Button>
        </>
    );
}