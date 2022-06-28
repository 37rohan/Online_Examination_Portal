import React from 'react';
import { UserAuth } from '../context/AuthContext';
import { Navbar, Container, Nav, NavDropdown, Button, } from "react-bootstrap";

const Nav2 = () => {
    const { logOut } = UserAuth();

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

                    <Navbar.Brand href='/'>Examination Portal</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href='#Schedule'>Exam Schedule</Nav.Link>
                            <NavDropdown title="Subject" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#M">MATH</NavDropdown.Item><hr />
                                <NavDropdown.Item href="#E">ENGLISH</NavDropdown.Item><hr />
                                <NavDropdown.Item href="#S">SCIENCE</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav>
                            <NavDropdown title="Account" id="collasible-nav-dropdown">
                                <NavDropdown.Item href='#profile'>Profile</NavDropdown.Item><hr />
                                <NavDropdown.Item href='#help'>Help</NavDropdown.Item>
                            </NavDropdown>
                            <Button className='btn' onClick={handleSignOut}>Logout</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Nav2;