import { useState } from "react";
import { Button } from "reactstrap";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { Col, Form, Row } from 'react-bootstrap';


export default function AddQuestion() {
    const [modal, setModal] = useState(false) // For creating popup
    const [userData, setUserData] = useState({  // from connecting form fields to firebase
        enterQuestion: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        queAnswer: "",
        subject: "",
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
        const { enterQuestion, optionA, optionB, optionC, optionD, queAnswer, subject } = userData;
        if (enterQuestion && optionA && optionB && optionC && optionD && queAnswer && subject) {


            const data = await fetch('https://online-examination-porta-a7074-default-rtdb.asia-southeast1.firebasedatabase.app/QuestionData.json',
                {
                    method: "POST",
                    headers: {
                        "content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        enterQuestion,
                        optionA,
                        optionB,
                        optionC,
                        optionD,
                        queAnswer,
                        subject,
                    }),
                }
            );
            if (data) {
                setUserData({
                    enterQuestion: "",
                    optionA: "",
                    optionB: "",
                    optionC: "",
                    optionD: "",
                    queAnswer: "",
                    subject: "",
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
                    Add Question
                </ModalHeader>
                <ModalBody>
                    <Form method="POST">
                        <Row className="mb-3">

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Enter Question</Form.Label>
                                <Form.Control type="text"
                                    placeholder="12 + 5 = ?"
                                    value={userData.enterQuestion}
                                    onChange={postUserData}
                                    name="enterQuestion" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Option A</Form.Label>
                                <Form.Control type="text"
                                    placeholder="Option A"
                                    value={userData.optionA}
                                    onChange={postUserData}
                                    name="optionA" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Option B</Form.Label>
                            <Form.Control type="text"
                                placeholder="Option B"
                                value={userData.optionB}
                                onChange={postUserData}
                                name="optionB" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Option C</Form.Label>
                            <Form.Control type="text"
                                placeholder="Option C"
                                value={userData.optionC}
                                onChange={postUserData}
                                name="optionC" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Option D</Form.Label>
                            <Form.Control type="text"
                                placeholder="Option D"
                                value={userData.optionD}
                                onChange={postUserData}
                                name="optionD" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Answer</Form.Label>
                            <Form.Control type="text"
                                placeholder="Answer of Question"
                                value={userData.queAnswer}
                                onChange={postUserData}
                                name="queAnswer" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text"
                                placeholder="Subject"
                                value={userData.subject}
                                onChange={postUserData}
                                name="subject" />
                        </Form.Group>

                        <Button type="submit" onClick={submitData} >
                            Submit
                        </Button>
                    </Form>
                </ModalBody>
            </Modal>

            <Button onClick={() => setModal(true)}>
                Add Questions
            </Button>
        </>
    );
}