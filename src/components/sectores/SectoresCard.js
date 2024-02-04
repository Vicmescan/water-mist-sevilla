import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

const SectoresCard = ({ pic, title, modalText }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Card className="service-card" onClick={handleShow} >
      {/* <Card.Header>{pic}</Card.Header> */}
      <Image src={pic} className="service-card-picture" /> 
        <Card.Body className="sector service-card-body">
          <Card.Title className="text-center service-card-title">
            <b>{title}</b>
          </Card.Title>
        </Card.Body>
      </Card>


      <Modal size="lg" show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title><h1>{title}</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalText}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SectoresCard;
