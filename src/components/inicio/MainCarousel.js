import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../images/img1.webp";
import img3 from "../../images/img3.webp";

export const MainCarousel = () => {
  return (
    <Carousel className="carousel" >
      <Carousel.Item>
        <img className="d-block w-100 carousel-image" src={img1} alt="First slide" />
        <Carousel.Caption>
          <h3 className="carousel-h3">Reducción de temperatura en 10ºC</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carousel-image" src={img1} alt="Second slide" />
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
    </Carousel>
  );
};
