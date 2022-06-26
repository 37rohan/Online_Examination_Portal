import React from 'react';
import { UserAuth } from '../context/AuthContext';
import Signin from '../pages/Signin';
import '../pages.css/NavAdmin.css';
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
                            <Button className='btn' href="/addfaculty">Add Faculties</Button>
                            <Button className='btn' href='/addstudent'>Add Students</Button >
                            <Button className='btn' href='/exam'>Schedule Exam</Button >
                        </Nav>
                        <Nav>
                            <NavDropdown title="Profile" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#profile">Edit Profile</NavDropdown.Item> <hr /> 
                                <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
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