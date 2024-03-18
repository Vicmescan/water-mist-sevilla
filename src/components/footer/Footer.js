import React, { useState } from "react";
import { Navbar, Container, Modal, Button } from "react-bootstrap";

const Footer = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar className="footer" onClick={handleShow}>
        <Container>
          <Navbar.Brand className="footer-text" href="#home">
            Pólítica de privacidad
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text></Navbar.Text>
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
    </>
  );
};
export default Footer;
