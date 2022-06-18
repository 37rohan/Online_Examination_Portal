import { useState } from "react";
import { Button } from "reactstrap";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { Col, Form, Row } from 'react-bootstrap';


export default function RegisterFY() {
    const [modal, setModal] = useState(false) // For creating popup
    const [userData, setUserData] = useState({  // from connecting form fields to firebase
        firstName: "",
        lastName: "",
        emailId: "",
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
        const { firstName, lastName, emailId } = userData;
        if (firstName && lastName && emailId) {


            const data = await fetch('https://online-examination-porta-a7074-default-rtdb.asia-southeast1.firebasedatabase.app/facultyData.json',
                {
                    method: "POST",
                    headers: {
                        "content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        firstName,
                        lastName,
                        emailId,
                    }),
                }
            );
            if (data) {
                setUserData({
                    firstName: "",
                    lastName: "",
                    emailId: "",
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
                    Add Students
                </ModalHeader>
                <ModalBody>
                    <Form method="POST">
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text"
                                    placeholder="Rohan"
                                    value={userData.firstName}
                                    onChange={postUserData}
                                    name="firstName" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text"
                                    placeholder="Goyal"
                                    value={userData.lastName}
                                    onChange={postUserData}
                                    name="lastName" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email"
                                placeholder="example@gmail.com"
                                value={userData.emailId}
                                onChange={postUserData}
                                name="emailId" />
                        </Form.Group>

                        <Button type="submit" onClick={submitData} >
                            Submit
                        </Button>
                    </Form>
                </ModalBody>
            </Modal>

            <Button onClick={() => setModal(true)}>
                Add Faculty
            </Button>
        </>
    );
}