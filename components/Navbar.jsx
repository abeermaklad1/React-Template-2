import React, {useContext} from "react";
import {Navbar, Container, Nav} from 'react-bootstrap';
// import {CounterContext} from '../contexts/CounterContext';
import {DarkContext} from '../contexts/DarkContext';


export default function OurNavbar() {
  //  let state = useContext(CounterContext);
  let value = useContext(DarkContext);
  return (
        <Navbar bg="success" variant="dark" style={{backgroungcolor: value.backgroungcolor}}>
        <Container>
          <Navbar.Brand href="#home">Navbar <span></span></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            
          </Nav>
          <button className="btn btn-outline-dark" onClick={value.changetheme}>Dark</button>
        </Container>
        </Navbar>
  );
}
