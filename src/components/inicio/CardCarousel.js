import React from "react";
import { MainCarousel } from "./MainCarousel";
import { Link } from "react-scroll";
import { Container, Row, Col, Button } from "react-bootstrap";

const CardCarousel = ({setScrollElement, servicios }) => {
  return (
    <>
        <div className="carousel-background">
          <Container className="cardCarousel ">
            <Row>
              <Col lg className="text">
                <h1 className="title ">WATER MIST SEVILLA</h1>
                <h2 className="title subtitle">Microclima y Climatización</h2>
 {/*                <Link className="nav-Link navLink" smoth="true" to={servicios}>
                  <Button className="service-button" onClick={() => setScrollElement(["servicios"]) } >Ver servicios</Button>
                </Link> */}
              </Col>
              <Col lg>
                <MainCarousel />
              </Col>
            </Row>
          </Container>
        </div>
    </>
  );
};

export default CardCarousel;
