import React from "react";
import { Form, Button } from "react-bootstrap";
import { Zoom } from "react-awesome-reveal";
import privacidad from "../../assets/documentos/Politica_De_Privacidad.pdf";

function ContactForm() {
  return (
    <>
      <Zoom delay={200} duration={2000} direction="right" triggerOnce="true">
        <div className="contactForm">
          <h1 className="text-center">O escríbanos</h1>
          <hr></hr>
          <Form
            action="https://formsubmit.co/info@watermists.com"
            method="POST"
          >
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
                feedback="Debe estar de acuerdo para continuar"
                feedbackType="invalid"
              />
              <>&nbsp;</>
              <p style={{textAlign: "left", fontSize: "12px"}}>
                Utilizaremos sus datos para responder consultas, enviar
                comunicaciones comerciales y realizar análisis estadísticos.
                Para más información sobre el tratamiento y sus derechos,
                consulte las{" "}
                <a className="privacidad-link" href={privacidad} target="_blank" rel="noreferrer">
                  políticas de privacidad
                </a>
              </p>
            </Form.Group>
            <br></br>
            <Button
              className="about-submit"
              variant="outline-dark"
              type="submit"
            >
              Enviar
            </Button>

            {/*      <input
              type="hidden"
              name="_next"
              value="http://localhost:3000/#/contacto"
            ></input> */}
            <input type="hidden" name="_captcha" value="false"></input>
          </Form>
        </div>
      </Zoom>
    </>
  );
}

export default ContactForm;
