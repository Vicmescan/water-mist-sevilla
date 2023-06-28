import React from "react";
import ContactText from "./ContactText";
import ContactForm from "./ContactForm";
import Social from "./Social";
import { Container, Row, Col } from "react-bootstrap";

const Contacto = () => {
  return (
    <Container className="contacto-container">
      <Row>
        <Col md={5} className="ps-md-5 text-center">
          <ContactText />
          <Social display="d-none d-md-flex" />
        </Col>
        <Col md={2} className="d-none d-md-block"></Col>
        <Col md={5} className="pe-md-5 text-center">
          <ContactForm />
          <Social display="d-flex d-md-none" />
        </Col>
      </Row>
    </Container>
  );
};

export default Contacto;
