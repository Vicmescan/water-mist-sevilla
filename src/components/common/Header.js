import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.webp";
import menu from "../../images/menu.png"; // Icons made by <a href="https://www.flaticon.com/authors/deha21" title="deha21"> deha21 </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a>

const Header = () => {
  return (
    <Navbar className="navBar" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img className="logo" src={logo} alt="Water Mist Sevilla Logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle>
          <img src={menu} alt="menu icon"></img>
        </Navbar.Toggle>
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
