import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MainCarousel } from "./MainCarousel";
import { useNavigate } from "react-router-dom";

const CardCarousel = () => {

  const navigate = useNavigate();

  return (
    <Container className="cardCarousel">
      <Row>
        <Col lg className="text">
          <h1 className="title ">WATER MIST SEVILLA</h1>
          <h2 className="title subtitle">Microclima y Climatización</h2>
          <button className="service-button" onClick={() => navigate('/services')} >Ver servicios</button>
        </Col>
        <Col lg>
          <MainCarousel />
        </Col>
      </Row>
    </Container>
  );
};

export default CardCarousel;
