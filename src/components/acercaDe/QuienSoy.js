import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AttentionSeeker } from "react-awesome-reveal";


const QuienSoy = () => {
  return (
    <div className="quienSoy">
        <Container>
          <Row>
            <Col md={5}>
            <AttentionSeeker effect="flash" delay={500}>
                <h1 className="quienSoy-title d-md-none">Hola, Soy Jose Yaque</h1>
              </AttentionSeeker>
              <br className="d-md-none" ></br>
              <div className="quienSoy-image" alt="Foto de Jose Yaque">
              </div>
            </Col>
            <Col md={7} className="quienSoy-paragraph" >
              <AttentionSeeker effect="flash" delay={500}> 
                <h1 className="quienSoy-title d-none d-md-block">Hola, Soy Jose Yaque</h1>
              </AttentionSeeker>
              <hr  className="d-none d-md-block"></hr >
              <br></br>
              <p >
                Tras diez años de experiencia como Responsable de un
                Departamento técnico y supervisor de procesos en una empresa de
                climatización y servicio técnico, creo
                <AttentionSeeker effect="heartBeat" delay={5000}>
                  <b> Water Mist Sevilla</b>
                </AttentionSeeker>
                para poner a tu disposición mi conocimiento del sector y
                ofrecerte un servicio de calidad con los mejores productos del
                mercado.
              </p>
            </Col>
          </Row>
        </Container>
    </div>
  );
};

export default QuienSoy;
