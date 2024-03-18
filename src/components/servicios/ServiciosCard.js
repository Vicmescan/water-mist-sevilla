import React, { useState } from "react";
import { Card, Modal, Button, Carousel } from "react-bootstrap";

const ServiciosCard = ({ title, image, body, modalInfo, carrouselPics }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card className="service-card" onClick={handleShow}>
        <Card.Header as="h5" className="text-center service-card-title">
          {title}
        </Card.Header>
        <Card.Img variant="top" src={image} className="service-card-picture" />
        <Card.Body className="service-card-body">
          <Card.Text>{body}</Card.Text>
        </Card.Body>
      </Card>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1>{title}</h1>
          </Modal.Title>
        </Modal.Header>
        <Carousel className="modalCararousel">
          {carrouselPics ? carrouselPics.map((pic, index) => (
            <Carousel.Item key={index}>
              <img
                className="modalCarrouselPic"
                src={pic}
                alt={`Imagen ${index + 1}`}
              />
            </Carousel.Item>
          )) : null}
        </Carousel>
        <Modal.Body>{modalInfo}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ServiciosCard;
