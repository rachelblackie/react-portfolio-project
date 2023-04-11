import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./styles/MenuBar.css";

function MenuBar(props) {
  let content = {
    English: {
      navLinkOne: "About Me",
      navLinkTwo: "Contact",
    },
    Español: {
      navLinkOne: "Sobre Yo",
      navLinkTwo: "Contacto",
    },
  };
  props.language === "Español"
    ? (content = content.Español)
    : (content = content.English);
  return (
    <div className="container">
      <Navbar
        bg="dark"
        variant="dark"
        className="fixed-top"
        expand="lg"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand href="#" className="navbar-left">
            RB
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="nav-collapse">
            <Nav className="mx-auto Nav">
              <Nav.Link href="#cv">CV</Nav.Link>
              <Nav.Link href="#about-me">{content.navLinkOne}</Nav.Link>
              <Nav.Link href="#contact">{content.navLinkTwo}</Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link
                href="https://github.com/rachelblackie"
                title="See Rachel
                Blackie's work on GitHub"
                target="_blank"
                rel="noopener
                noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </Nav.Link>{" "}
              <Nav.Link
                href="https://www.linkedin.com/in/rachel-blackie-273b18127/"
                title="See Rachel Blackie's LinkedIn profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </Nav.Link>{" "}
            </Nav>
            {""}
            <div className="language-select ms-3">
              <span className="me-2 language-icon">
                <i class="fa-solid fa-globe"></i>
              </span>
              <select
                className="custom-select"
                value={props.language}
                onChange={(e) => props.handleSetLanguage(e.target.value)}
              >
                <option value="English">English</option>
                <option value="Español">Español</option>
              </select>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default MenuBar;
