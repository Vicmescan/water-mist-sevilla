import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { Zoom } from "react-awesome-reveal";

function ContactForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Zoom delay={200} duration={2000} direction="right" triggerOnce="true">
        <div className="contactForm">
          <h1 className="text-center">O escríbanos</h1>
          <hr></hr>
          <Form action="https://formsubmit.co/orejitax@gmail.com" method="POST">
            <Form.Group className="mb-3">
              <Form.Label>Nombre *</Form.Label>
              <Form.Control
                required
                placeholder="Nombre"
                name="name"
                className="contactForm-input"
              />
              <Form.Label>E-Mail *</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="E-Mail"
                name="email"
                className="contactForm-input"
              />
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Teléfono"
                className="contactForm-input"
              />
              <Form.Label>Mensaje *</Form.Label>
              <Form.Control
                required
                as="textarea"
                rows={3}
                placeholder="Escriba aquí su mensaje"
                name="message"
                className="contactForm-input"
              />
            </Form.Group>
            <Form.Group className="mb-3 d-flex">
              <Form.Check
                required
                label="Está de acuerdo con las"
                feedback="Debe estar de acuerdo para continuar"
                feedbackType="invalid"
              />
              <>&nbsp;</>
              <p className="privacidad-link" onClick={handleShow}>políticas de privacidad</p>
            </Form.Group>
            <br></br>
            <Button
              className="about-submit"
              variant="outline-dark"
              type="submit"
            >
              Enviar
            </Button>

            <input
              type="hidden"
              name="_next"
              value="http://localhost:3000/#/contacto"
            ></input>
            <input type="hidden" name="_captcha" value="false"></input>
          </Form>
        </div>
      </Zoom>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1>Política de privacidad</h1>
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
}

export default ContactForm;
