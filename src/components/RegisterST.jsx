import { useState } from "react";
import { Button } from "reactstrap";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { Col, Form, Row } from 'react-bootstrap';


export default function RegisterST() {
    const [modal, setModal] = useState(false)

    return (
        <div>
            <Modal size="lg" isOpen={modal} toggle={() => setModal(!modal)}>
                <ModalHeader toggle={() => setModal(!modal)}>
                    Add Students
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Rohan" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Goyal" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="example@gmail.com" />
                        </Form.Group>

                        <Button type="submit">
                            Submit
                        </Button>
                    </Form>
                </ModalBody>
            </Modal>

            <Button onClick={() => setModal(true)}>
                Add Student
            </Button>
        </div>
    );
}