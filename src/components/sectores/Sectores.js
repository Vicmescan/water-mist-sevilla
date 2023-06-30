// import React from "react";
import { Card } from "react-bootstrap";
import foto1 from "../../assets/images/calefacción.webp";
// import { Fade } from "react-awesome-reveal";

// const Sectores = () => {
//   return (
//     <Container className="d-flex servicios">
//       <h1>Sectores y Aplicaciones</h1>
//       <Row
//         xs={1}
//         md={2}
//         lg={3}
//         className="g-5 m-auto align-self-center justify-self-center"
//       >
//         <Fade duration={400}>
//           <Col>
//             <Card className="service-card">
//               <Card.Img
//                 variant="top"
//                 src={foto1}
//                 className="service-card-picture"
//               />
//               <Card.Body className="sector service-card-body">
//                 <Card.Title className="text-center service-card-title">
//                   <b>INDUSTRIAL</b>
//                 </Card.Title>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col>
//             <Card className="service-card">
//               <Card.Img
//                 variant="top"
//                 src={foto1}
//                 className="service-card-picture"
//               />
//               <Card.Body className="sector service-card-body">
//                 <Card.Title className="text-center service-card-title">
//                   <b>RESIDENCIAL</b>
//                 </Card.Title>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col>
//             <Card className="service-card">
//               <Card.Img
//                 variant="top"
//                 src={foto1}
//                 className="service-card-picture"
//               />
//               <Card.Body className="sector service-card-body">
//                 <Card.Title className="text-center service-card-title">
//                   <b>HOSTELERÍA</b>
//                 </Card.Title>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col>
//             <Card className="service-card">
//               <Card.Img
//                 variant="top"
//                 src={foto1}
//                 className="service-card-picture"
//               />
//               <Card.Body className="sector service-card-body">
//                 <Card.Title className="text-center service-card-title">
//                   <b>ZONAS DEPORTIVAS Y EVENTOS</b>
//                 </Card.Title>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col>
//             <Card className="service-card">
//               <Card.Img
//                 variant="top"
//                 src={foto1}
//                 className="service-card-picture"
//               />
//               <Card.Body className="sector service-card-body">
//                 <Card.Title className="text-center service-card-title">
//                   <b>PAISAJISMO Y EFECTOS VISUALES</b>
//                 </Card.Title>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Fade>
//       </Row>
//     </Container>
//   );
// };

// export default Sectores;

/* ------------------------------------------------------------------------ */

import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper";

export default function Sectores() {
  const [slidesPerView, setSlidesPerView] = useState(5);

  useEffect(() => {
    if (window.innerWidth < 1200) {
      setSlidesPerView(4.5);
    } if (window.innerWidth < 992) {
      setSlidesPerView(3.5);
    } if  (window.innerWidth < 768) {
      setSlidesPerView(2.5);
    } if (window.innerWidth < 575 ) {
      setSlidesPerView(1.5);
    }
  }, []);

  console.log(slidesPerView)

  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
        style={{ height: "50vh" }}
      >
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
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
        </SwiperSlide>
      </Swiper>
    </>
  );
}
