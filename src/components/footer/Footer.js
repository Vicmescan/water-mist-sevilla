import React, { useState } from "react";
import { Navbar, Container, Modal, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const Footer = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);


  const location = useLocation();
  (function(window, location) {
    window.addEventListener("popstate", function() {
      if(location.hash === "#!/stealingyourhistory") {
            setTimeout(function(){
              location.replace("http://localhost:3000/");
            },0);
      }
    }, false);
}(window, location));

  return (
    <>
      <Navbar className="footer">
        <Container>
          <Navbar.Brand className="footer-text" onClick={handleShow}>
            Pólítica de privacidad
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand className="footer-text" onClick={handleShow2}>
            Condiciones Legales
          </Navbar.Brand>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1>Pólítica de privacidad</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Aquí van los Terminos y Condiciones y tal </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal size="lg" show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1>Condiciones legales</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Aquí van los Terminos y Condiciones y tal </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Footer;
