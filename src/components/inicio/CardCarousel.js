import React, { useState, useEffect } from "react";
import { MainCarousel } from "./MainCarousel";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";
import giralda from "../../assets/videos/giralda.mp4";
import toldo from "../../assets/videos/toldo.mp4";
import { Container, Row, Col, Button } from "react-bootstrap";

const CardCarousel = ({ servicios }) => {
  const [infoVideo, setInfoVideo] = useState(toldo);

  useEffect(() => {
    if (window.innerWidth < 576) {
      setInfoVideo(giralda);
    } else {
      setInfoVideo(toldo);
    }
  }, []);

  return (
    <>
      <video src={infoVideo} autoPlay loop muted className="info-video">
        {" "}
      </video>
      <Fade delay={1600} duration={1500} triggerOnce="true">
        <div className="carousel-background">
          <Container className="cardCarousel">
            <Row>
              <Col lg className="text">
                <h1 className="title ">WATER MIST SEVILLA</h1>
                <h2 className="title subtitle">Microclima y Climatización</h2>
                <Link className="nav-Link navLink" smoth="true" to={servicios}>
                  <Button className="service-button">Ver servicios</Button>
                </Link>
              </Col>
              <Col lg>
                <MainCarousel />
              </Col>
            </Row>
          </Container>
        </div>
      </Fade>
    </>
  );
};

export default CardCarousel;
