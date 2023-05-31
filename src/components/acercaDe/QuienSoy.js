import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import jose from "../../assets/images/jose.webp";

const QuienSoy = () => {
  return (
    <div className="quienSoy">
      <Fade delay={200} duration={700}>
        <Container>
          <Row>
            <Col lg>
              <div className="quienSoy-image">
                <Fade delay={700} duration={1000}>
                  <h1 className="quienSoy-title d-flex d-md-none">
                    Hola, Soy Jose Yaque
                  </h1>
                </Fade>
                <img src={jose} alt="Foto de Jose Yaque" />
              </div>
            </Col>
            <Col lg className="d-none d-md-flex">
              <h1 className="quienSoy-title">Hola, Soy Jose Yaque</h1>
              <hr></hr>
              <br></br>
              <p className="quienSoy-paragraph">
                Tras diez años de experiencia como Responsable de un
                Departamento técnico y supervisor de procesos en una empresa de
                climatización y servicio técnico, creo<b> Water Mist Sevilla</b>
                para poner a tu disposición mi conocimiento del sector y
                ofrecerte un servicio de calidad con los mejores productos del
                mercado.
              </p>
            </Col>
          </Row>
        </Container>
      </Fade>
    </div>
  );
};

export default QuienSoy;
