import React from "react";
import ContactForm from "../components/contacto/ContactForm";
import ContactText from "../components/contacto/ContactText";
import Social from "../components/contacto/Social";
import { Container, Row, Col } from "react-bootstrap";

import { motion } from "framer-motion";

const Contacto = () => {
  return (
    <motion.div
      className="contacto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
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
    </motion.div>
  );
};

export default Contacto;
