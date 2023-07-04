// import React from "react";
import React, { useState, useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper";


import SectoresCard from "./SectoresCard";
import foto1 from "../../assets/images/calefacción.webp";

import {
  Industrial,
  Residencial,
  Hosteleria,
  Deportivas,
  Paisajismo,
} from "./ModalText.js";

import { Fade } from "react-awesome-reveal";

export default function Sectores() {
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
    <>
    <Fade duration={600}>
    <h1 className="sectores-header">Sectores y Aplicación</h1>
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
        style={{ height: "50vh" }}
      >
        <SwiperSlide>
          <SectoresCard
            pic={foto1}
            title={"INDUSTRIAL"}
            modalText={<Industrial />}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SectoresCard
            pic={foto1}
            title={"RESIDENCIAL"}
            modalText={<Residencial />}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SectoresCard
            pic={foto1}
            title={"HOSTELERÍA"}
            modalText={<Hosteleria />}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SectoresCard
            pic={foto1}
            title={"ZONAS DEPORTIVAS Y EVENTOS"}
            modalText={<Deportivas />}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SectoresCard
            pic={foto1}
            title={"PAISAJISMO Y EFECTOS VISUALES"}
            modalText={<Paisajismo />}
          />
        </SwiperSlide>
      </Swiper>
      </Fade>
    </>
  );
}
