import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { MainCarousel } from "./MainCarousel";
import { NavLink } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const CardCarousel = () => {
  return (
    <Fade delay={1600} duration={1500}>
      <div className="carousel-background">
        <Container className="cardCarousel">
          <Row>
            <Col lg className="text">
              <h1 className="title ">WATER MIST SEVILLA</h1>
              <h2 className="title subtitle">Microclima y Climatización</h2>
              <Button className="service-button" as={NavLink} to="/servicios">
                Ver servicios
              </Button>
            </Col>
            <Col lg>
              <MainCarousel />
            </Col>
          </Row>
        </Container>
      </div>
    </Fade>
  );
};

export default CardCarousel;
