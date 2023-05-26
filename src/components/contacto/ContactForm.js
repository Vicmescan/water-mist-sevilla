import React from "react";
import { Form, Button } from "react-bootstrap";
import { Zoom } from "react-awesome-reveal";

function ContactForm() {
  return (
    <Zoom delay={500} direction="right">
      <div className="contactForm">
        <h1 className="text-center">O escríbanos</h1>
        <hr></hr>
        <Form action="https://formsubmit.co/orejitax@gmail.com" method="POST">
          <Form.Group className="mb-3">
            <Form.Label>Nombre *</Form.Label>
            <Form.Control required placeholder="Nombre" name="name" />
            <Form.Label>E-Mail *</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="E-Mail"
              name="email"
            />
            <Form.Label>Teléfono</Form.Label>
            <Form.Control type="tel" placeholder="Teléfono" />
            <Form.Label>Mensaje *</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows={3}
              placeholder="Escriba aquí su mensaje"
              name="message"
            />
          </Form.Group>
          <br></br>
          <Button className="about-submit" variant="outline-dark" type="submit">
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
  );
}

export default ContactForm;
