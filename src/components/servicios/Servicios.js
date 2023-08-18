import React, { useEffect, useState } from "react";
import foto1 from "../../assets/images/calefacción.webp";
import { Container, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper";

const Servicios = () => {

  const [slidesPerView, setSlidesPerView] = useState(5);
  
  useEffect(() => {
    if (window.innerWidth < 1200) {
      setSlidesPerView(4.5);
    }
    if (window.innerWidth < 992) {
      setSlidesPerView(3.2);
    }
    if (window.innerWidth < 768) {
      setSlidesPerView(2.5);
    }
    if (window.innerWidth < 575) {
      setSlidesPerView(1.5);
    }
  }, []);

  return (

    <Container className="d-flex servicios">
      <h1>Productos y Servicios</h1>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        modules={[Autoplay, FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
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
                Conoce todas las opciones para climatizar tu negocio o vivienda
                mediante nuestros sistemas de nebulización de agua y
                evaporativos portátiles.
              </Card.Text>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
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
                Te ayudamos a crear un ambiente cálido y agradable en cualquier
                espacio gracias a nuestros sistemas de calefacción infrarroja y
                estufas de gas.
              </Card.Text>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
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
                BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA
                BLA BLA BLA BLA BLA
              </Card.Text>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
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
                BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA
                BLA BLA BLA BLA BLA
              </Card.Text>
            </Card.Body>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
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
                control y prevención de legionella y estaremos a tu disposición
                para lo que necesites.
              </Card.Text>
            </Card.Body>
          </Card>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Servicios;
