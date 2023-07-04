import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AttentionSeeker } from "react-awesome-reveal";
import QuienSoyCarousel from "./QuienSoyCarousel";
import jose from "../../assets/images/jose.webp";
import Image from "react-bootstrap/Image";
import Fade from "react-awesome-reveal";

const QuienSoy = () => {
  return (
    <div className="quienSoy">
      <Fade duration={600}>
        <Container>
          <Row>
            <Col xs={12} sm={5} md={5}>
              <AttentionSeeker effect="flash" delay={500}>
                <h1 className="quienSoy-title d-md-none p-1">
                  Hola, Soy Jose Yaque
                </h1>
              </AttentionSeeker>
              <br className="d-md-none"></br>
              <Image
                src={jose}
                alt="Foto de Jose Yaque"
                rounded
                className="quienSoy-image"
              />
              <br className="d-md-none"></br>
            </Col>
            <Col xs={12} sm={7} md={7} className="quienSoy-paragraph">
              <QuienSoyCarousel />
            </Col>
          </Row>
        </Container>
      </Fade>
    </div>
  );
};

export default QuienSoy;
