import React from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../assets/images/logo.webp";
import menu from "../../assets/images/menu.png"; // Icons made by <a href="https://www.flaticon.com/authors/deha21" title="deha21"> deha21 </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a>

const Header = () => {
  
  const location = useLocation();
  return (
    <>
      <Navbar collapseOnSelect className="navBar fluid" expand="md" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <img
              className="logo"
              src={logo}
              alt="Water Mist Sevilla Logo"
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <img src={menu} alt="menu icon"></img>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="nav-Link navLink" href="#/">
                {location.pathname === "/" ? (
                  <span style={{ textDecoration: "underline" }}>Inicio</span>
                ) : (
                  <span>Inicio</span>
                )}
              </Nav.Link>
              <Nav.Link className="nav-Link navLink" href="#/servicios">
                {location.pathname === "/servicios" ? (
                  <span style={{ textDecoration: "underline" }}>Servicios</span>
                ) : (
                  <span>Servicios</span>
                )}
              </Nav.Link>
              <Nav.Link className="nav-Link navLink" href="#/acercaDe">
                {location.pathname === "/acercaDe" ? (
                  <span style={{ textDecoration: "underline" }}>Acerca de</span>
                ) : (
                  <span>Acerca de</span>
                )}
              </Nav.Link>
              <Nav.Link className="nav-Link navLink" href="#/contacto">
                {location.pathname === "/contacto" ? (
                  <span style={{ textDecoration: "underline" }}>Contacto</span>
                ) : (
                  <span>Contacto</span>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
