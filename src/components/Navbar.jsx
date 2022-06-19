import React from 'react';
import { UserAuth } from '../context/AuthContext';
import Signin from '../pages/Signin';
import { Navbar, Container, Button } from 'react-bootstrap'
import '../pages.css/NavAdmin.css';


const Nav = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Online Examination Portal</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        </Navbar.Collapse>
        {user?.displayName ? (
          <Button className='btn' onClick={handleSignOut}>Logout</Button>
        ) : (
          <Signin />
        )}
      </Container>
    </Navbar>
  );
};

export default Nav;
