import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./MenuBar.css";

export default function MenuBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container className="Container">
          <Navbar.Brand href="#" className="ms-0">
            Home
          </Navbar.Brand>
          <Nav className="mx-auto Nav">
            <Nav.Link href="#">CV</Nav.Link>
            <Nav.Link href="#">About Me</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
