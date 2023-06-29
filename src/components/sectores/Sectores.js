import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import foto1 from "../../assets/images/calefacción.webp";
import { Fade } from "react-awesome-reveal";

const Sectores = () => {
  return (
    <Container className="d-flex servicios">
      <h1>Sectores y Aplicaciones</h1>
      <Row
        xs={1}
        md={2}
        lg={3}
        className="g-5 m-auto align-self-center justify-self-center"
      >
        <Fade duration={400}>
          <Col>
            <Card className="service-card">
              <Card.Img
                variant="top"
                src={foto1}
                className="service-card-picture"
              />
              <Card.Body className="sector service-card-body">
                <Card.Title className="text-center service-card-title">
                  <b>INDUSTRIAL</b>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="service-card">
              <Card.Img
                variant="top"
                src={foto1}
                className="service-card-picture"
              />
              <Card.Body className="sector service-card-body">
                <Card.Title className="text-center service-card-title">
                  <b>RESIDENCIAL</b>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="service-card">
              <Card.Img
                variant="top"
                src={foto1}
                className="service-card-picture"
              />
              <Card.Body className="sector service-card-body">
                <Card.Title className="text-center service-card-title">
                  <b>HOSTELERÍA</b>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="service-card">
              <Card.Img
                variant="top"
                src={foto1}
                className="service-card-picture"
              />
              <Card.Body className="sector service-card-body">
                <Card.Title className="text-center service-card-title">
                  <b>ZONAS DEPORTIVAS Y EVENTOS</b>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="service-card">
              <Card.Img
                variant="top"
                src={foto1}
                className="service-card-picture"
              />
              <Card.Body className="sector service-card-body">
                <Card.Title className="text-center service-card-title">
                  <b>PAISAJISMO Y EFECTOS VISUALES</b>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Fade>
      </Row>
    </Container>
  );
};

export default Sectores;
