import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo from '../assets/Vasiti-Logo-black 1.png'

export default function Topbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" sticky="top" variant="light" >
      <Container>
        <Navbar.Brand href="#"> <img src={Logo} alt="logo" /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/" className="text-dark mr-3">ABOUT US</Nav.Link>
            <Nav.Link href="#" className="text-dark mr-3">STORIES </Nav.Link>
            <Nav.Link href="#" className="text-dark mr-3">CONTACT</Nav.Link>
            <Nav.Link href="#" className="text-dark mr-3">LOG IN </Nav.Link>
            <Nav.Link href="#" className="signup-btn text-white">SIGN UP</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}