import React from "react";
import foto1 from "../../assets/images/calefacción.webp";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";

const Servicios = () => {
  return (
    <Container className="d-flex servicios">
      <h1>Productos y Servicios</h1>
      <Row
        xs={1}
        md={2}
        lg={3}
        className="g-5 m-auto align-self-center justify-self-center"
      >
        <Fade duration={600}>
          <Col>
            <Card className="service-card">
              <Card.Header as="h2" className="text-center service-card-title">
                CLIMATIZACIÓN EXTERIOR FRÍO
              </Card.Header>
              <Card.Img
                variant="top"
                src={foto1}
                className="service-card-picture"
              />
              <Card.Body className="service-card-body">
                <Card.Title>
                  <b>Microclima y Bioclimatización</b>
                </Card.Title>
                <Card.Text>
                  Conoce todas las opciones para climatizar tu negocio o
                  vivienda mediante nuestros sistemas de nebulización de agua y
                  evaporativos portátiles.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="service-card">
              <Card.Header as="h2" className="text-center service-card-title">
                CLIMATIZACIÓN EXTERIOR CALOR
              </Card.Header>
              <Card.Img
                variant="top"
                src={foto1}
                className="service-card-picture"
              />
              <Card.Body className="service-card-body">
                <Card.Title>
                  <b>Calefacción</b>
                </Card.Title>
                <Card.Text>
                  Te ayudamos a crear un ambiente cálido y agradable en
                  cualquier espacio gracias a nuestros sistemas de calefacción
                  infrarroja y estufas de gas.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="service-card">
              <Card.Header as="h2" className="text-center service-card-title">
                ALQUILER EVENTOS
              </Card.Header>
              <Card.Img
                variant="top"
                src={foto1}
                className="service-card-picture"
              />
              <Card.Body className="service-card-body">
                <Card.Title>
                  <b>BLA BLA BLA</b>
                </Card.Title>
                <Card.Text>
                  BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA
                  BLA BLA BLA BLA BLA BLA
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="service-card">
              <Card.Header as="h2" className="text-center service-card-title">
                REPARACIÓN Y VENTA
              </Card.Header>
              <Card.Img
                variant="top"
                src={foto1}
                className="service-card-picture"
              />
              <Card.Body className="service-card-body">
                <Card.Title>
                  <b>BLA BLA BLA</b>
                </Card.Title>
                <Card.Text>
                  BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA
                  BLA BLA BLA BLA BLA BLA
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="service-card">
              <Card.Header as="h2" className="text-center service-card-title">
                MANTENIMIENTO HIGIÉNICO SANITARIO
              </Card.Header>
              <Card.Img
                variant="top"
                src={foto1}
                className="service-card-picture"
              />
              <Card.Body className="service-card-body">
                <Card.Title>
                  <b>Servicio Técnico</b>
                </Card.Title>
                <Card.Text>
                  Contamos con personal cualificado para realizar labores de
                  control y prevención de legionella y estaremos a tu
                  disposición para lo que necesites.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Fade>
      </Row>
    </Container>
  );
};

export default Servicios;
