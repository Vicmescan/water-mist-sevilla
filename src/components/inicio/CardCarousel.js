import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { MainCarousel } from "./MainCarousel";
import { NavLink } from "react-router-dom";


const CardCarousel = () => {

  return (
    <Container className="cardCarousel">
      <Row>
        <Col lg className="text">
          <h1 className="title ">WATER MIST SEVILLA</h1>
          <h2 className="title subtitle">Microclima y Climatización</h2>
          <Button className="service-button" as={NavLink} to="/servicios" >Ver servicios</Button>
        </Col>
        <Col lg>
          <MainCarousel />
        </Col>
      </Row>
    </Container>
  );
};

export default CardCarousel;
