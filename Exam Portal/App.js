import React from 'react';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
// import Profile from "./profile.png";

function App() {
  return (
    <div className="App">
     <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
  <ReactBootStrap.Container>
  <ReactBootStrap.Navbar.Brand href="#home">Dashboard</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="me-auto">
      <ReactBootStrap.Nav.Link href="About">About</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#Categories">Categories</ReactBootStrap.Nav.Link>
      <ReactBootStrap.NavDropdown title="Subject" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#M">MATH</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#E">ENGLISH</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#S">SCIENCE</ReactBootStrap.NavDropdown.Item>
        {/* <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item> */}
      </ReactBootStrap.NavDropdown>
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
      <ReactBootStrap.Nav.Link href="#Exam">EXAM</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link eventKey={2} href="#Contact">
        CONTACT US
      </ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#Profile">PROFILE </ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
  </ReactBootStrap.Container>
</ReactBootStrap.Navbar>
    </div>
  );
}
export default App;