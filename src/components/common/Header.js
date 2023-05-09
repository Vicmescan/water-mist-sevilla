import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.webp";

const Header = () => {
  return (
    <Navbar bg="var(--white-color)" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Water Mist Sevilla Logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Item>
              <Nav.Link className="navLink" as={NavLink} to="/">
                Inicio
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="navLink" as={NavLink} to="/servicios">
                Servicios
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="navLink" as={NavLink} to="/acercaDe">
                Acerca de
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="navLink" as={NavLink} to="/contacto">
                Contacto
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
