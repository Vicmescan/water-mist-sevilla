import React from "react";
import { Navbar, Container } from "react-bootstrap";
import privacidad from "../../assets/documentos/Politica_De_Privacidad.pdf";
import legal from "../../assets/documentos/Aviso_Legal.pdf";
import cookies from "../../assets/documentos/Cookies.pdf";

const Footer = (props) => {
  return (
    <>
      <Navbar className="footer">
        <Container>
          <div>
            <ul className="justify-content-start d-flex flex-column" style={{listStyle: "none", marginLeft: "-30px"}}>
              <li>
                <a
                  className="footer-text"
                  href={privacidad}
                  target="_blank"
                  rel="noreferrer"
                >
                  POLITICAS DE PRIVACIDAD
                </a>
              </li>
              <li>
                <a
                  className="footer-text"
                  href={legal}
                  target="_blank"
                  rel="noreferrer"
                >
                  AVISO LEGAL
                </a>
              </li>
              <li>
                <a
                  className="footer-text"
                  href={cookies}
                  target="_blank"
                  rel="noreferrer"
                >
                  COOKIES
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-text">
            <p style={{fontStyle: "italic", margin: "35px 0 0"}}> Página realizada por <a href="https://github.com/Vicmescan" target="_blank" rel="noreferrer" style={{color: "white", fontStyle: "italic"}}>VMC</a></p>         
          </div>
        </Container>
      </Navbar>
    </>
  );
};
export default Footer;
