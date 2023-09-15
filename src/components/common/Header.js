import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../assets/images/logo.webp";
import menu from "../../assets/images/menu.png"; // Icons made by <a href="https://www.flaticon.com/authors/deha21" title="deha21"> deha21 </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a>
import { Link } from "react-scroll";

const Header = ({ inicio, servicios, sectores, acercaDe, contacto, setScrollElement }) => {


  return (
    <>
      <Navbar collapseOnSelect className="navBar fluid" expand="lg" fixed="top">
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
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              <Link className="nav-Link navLink" smoth="true" onClick={() => setScrollElement("inicio") } >
                <span>Inicio</span>
              </Link>
              <Link className="nav-Link navLink" smoth="true" onClick={() => setScrollElement("servicios") } >
                <span>Productos y Servicios</span>
              </Link>
              <Link className="nav-Link navLink" smoth="true" onClick={() => setScrollElement("sectores") } >
                <span>Sectores y Aplicación</span>
              </Link>
              <Link className="nav-Link navLink" smoth="true" onClick={() => setScrollElement("acercaDe") } >
                <span>Acerca de</span>
              </Link>
              <Link className="nav-Link navLink" smoth="true" onClick={() => setScrollElement("contacto") } >
                <span>Contacto</span>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
