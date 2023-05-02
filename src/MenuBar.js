import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./styles/MenuBar.css";

function MenuBar(props) {
  const [expanded, setExpanded] = useState(false);
  let content = {
    English: {
      navLinkAbout: "About Me",
      navLinkContact: "Contact",
    },
    Español: {
      navLinkAbout: "Sobre Mí",
      navLinkContact: "Contacto",
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
        expanded={expanded}
      >
        <Container>
          <Navbar.Brand href="#" className="navbar-left">
            RB
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse id="responsive-navbar-nav" className="nav-collapse">
            <Nav className="mx-auto Nav">
              <Nav.Link href="#cv" onClick={() => setExpanded(false)}>
                CV
              </Nav.Link>
              <Nav.Link href="#about-me" onClick={() => setExpanded(false)}>
                {content.navLinkAbout}
              </Nav.Link>
              <Nav.Link href="#contact" onClick={() => setExpanded(false)}>
                {content.navLinkContact}
              </Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link
                href="https://github.com/rachelblackie"
                title="See Rachel
                Blackie's work on GitHub"
                target="_blank"
                rel="noopener
                noreferrer"
                onClick={() => setExpanded(false)}
              >
                <i className="fa-brands fa-github"></i>
              </Nav.Link>{" "}
              <Nav.Link
                href="https://www.linkedin.com/in/rachel-blackie-273b18127/"
                title="See Rachel Blackie's LinkedIn profile"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setExpanded(false)}
              >
                <i className="fa-brands fa-linkedin"></i>
              </Nav.Link>
              <Nav.Link
                href="https://drive.google.com/file/d/1SK6yOsV2oDgHE0IHt2b2pHaXEop0Cloh/view?usp=sharing"
                title="Rachel Blackie's CV"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setExpanded(false)}
              >
                <i class="fa-solid fa-file-pdf"></i>
              </Nav.Link>
            </Nav>
            {""}
            <div className="language-select ms-3">
              <span className="me-2 language-icon">
                <i class="fa-solid fa-globe"></i>
              </span>
              <select
                className="custom-select"
                value={props.language}
                onChange={(e) => {
                  props.handleSetLanguage(e.target.value);
                  setExpanded(false);
                }}
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
