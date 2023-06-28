import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Servicios = () => {
  return (
    <div className="servicios">
      <h1>Servicios</h1>
      <Container className="d-flex vh-100">
        <Row xs={1} md={2} lg={3} className="g-5 m-auto align-self-center">
          <Col>
            <Card>
              <Card.Header as="h2" className="text-center service-card-title">
                FRÍO
              </Card.Header>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body className="service-card-body">
                <Card.Title>Microclima y Bioclimatización</Card.Title>
                <Card.Text>
                  Conoce todas las opciones para climatizar tu negocio o
                  vivienda mediante nuestros sistemas de nebulización de agua y
                  evaporativos portátiles.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header as="h2" className="text-center service-card-title">
                CALOR
              </Card.Header>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body className="service-card-body">
                <Card.Title>Calefacción</Card.Title>
                <Card.Text>
                  Te ayudamos a crear un ambiente cálido y agradable en
                  cualquier espacio gracias a nuestros sistemas de calefacción
                  infrarroja y estufas de gas.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header as="h2" className="text-center service-card-title">
                MANTENIMIENTO
              </Card.Header>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body  className="service-card-body">
                <Card.Title>Servicio Técnico</Card.Title>
                <Card.Text>
                  Contamos con personal cualificado para realizar labores de
                  control y prevención de legionella y estaremos a tu
                  disposición para lo que necesites.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Servicios;
