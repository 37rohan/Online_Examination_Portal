import React from 'react';
import { UserAuth } from '../context/AuthContext';
import Signin from '../pages/Signin';
import '../components/NavAdmin.css'
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";

const NavAdmin = () => {
    const { user, logOut } = UserAuth();

    const handleSignOut = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="App">
            <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/admin">Admin Panel</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#addfaculty">Add Faculties</Nav.Link>
                            <Nav.Link href='#addstudent'>Add Students</Nav.Link>
                        </Nav>
                        <Nav>
                            <NavDropdown title="Profile" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#M">MATH</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#Contact">
                                Contact Us
                            </Nav.Link>
                            {user == null ?
                                <Signin />
                                :
                                <Button className='btn' onClick={handleSignOut}>Logout</Button>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
}

export default NavAdmin;