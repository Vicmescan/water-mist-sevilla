import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../assets/images/img1.webp";
import img2 from "../../assets/images/img2.webp";
import img3 from "../../assets/images/img3.webp";
import img4 from "../../assets/images/img4.webp";
import img5 from "../../assets/images/img5.webp";
import img6 from "../../assets/images/img6.webp";

export const MainCarousel = () => {
  return (
    <Carousel className="carousel" >
      <Carousel.Item>
        <img className="d-block w-100 carousel-image" src={img1} alt="First slide" />
        <Carousel.Caption>
          <h3 className="carousel-h3">Reducción de temperatura en mínimo 10ºC</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carousel-image" src={img4} alt="Second slide" />
        <Carousel.Caption>
          <h3 className="carousel-h3">Disminución de insectos</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carousel-image" src={img3} alt="Third slide" />
        <Carousel.Caption>
          <h3 className="carousel-h3">Diseños adaptables y personalizables</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carousel-image" src={img2} alt="Fourth slide" />
        <Carousel.Caption>
          <h3 className="carousel-h3">Escaso Consumo de energía y agua</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carousel-image" src={img5} alt="Fifth slide" />
        <Carousel.Caption>
          <h3 className="carousel-h3">Autorización sanitaria reglamentaria siguiendo la normativa de la Junta de Andalucía</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carousel-image" src={img6} alt="Fifth slide" />
        <Carousel.Caption>
          <h3 className="carousel-h3">Realización de proyecto y presupuesto sin compromiso</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
