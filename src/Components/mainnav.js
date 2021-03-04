import React from 'react';
import {Container} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function MainNav() {
 return (
  <Navbar collapseOnSelect  expand="lg" bg="white" className="shadow-sm mainnav-con" variant="light" >
  <Container className="mainnav-con m-auto">
          <Nav className="ml-5 mr-5 mb-mainnav d-flex justify-content-between col">
          <Nav.Link href="/" className="text-dark">MARKETPLACE</Nav.Link>
          <Nav.Link href="#" className="text-dark">WHOLESALE CENTER </Nav.Link>
          <Nav.Link href="#" className="text-dark">SELLER CENTER</Nav.Link>
          <Nav.Link href="#" className="text-dark">SERVICES</Nav.Link>
          <Nav.Link href="#" className="text-dark">INTERSHIPS</Nav.Link>
          <Nav.Link href="#" className="text-dark">EVENTS</Nav.Link>
          </Nav>
  </Container>
</Navbar>
 );
}