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
// import { LiaIndustrySolid } from "react-icons/lia";
// import { AiOutlineHome } from "react-icons/ai";
// import { IoRestaurantOutline } from "react-icons/io5";
// import { MdOutlineSportsBasketball } from "react-icons/md";
// import { RiLandscapeLine } from "react-icons/ri";

import {
  Industrial,
  Residencial,
  Hosteleria,
  Deportivas,
  Paisajismo,
} from "./ModalText.js";

import residencial from "../../assets/images/residencial.webp"
import hosteleria from "../../assets/images/hosteleria.webp"
import industrial from "../../assets/images/industrial.webp"
import deportivo from "../../assets/images/deportivo.webp"
import paisajismo from "../../assets/images/paisajismo.webp"

export default function Sectores() {
  const [slidesPerView, setSlidesPerView] = useState(5);

  const handleResize = () => {
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
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize, false);
  }, []);

  return (
    <div className="sectores">
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
        className="mySwiperSectores"
      >
        <SwiperSlide>
          <SectoresCard
            pic={hosteleria}
            // pic={<IoRestaurantOutline size="150px" />}
            title={"HOSTELERÍA"}
            modalText={<Hosteleria />}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SectoresCard
            // pic={<AiOutlineHome size="150px" />}
            pic={residencial}
            title={"RESIDENCIAL"}
            modalText={<Residencial />}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SectoresCard
            // pic={<LiaIndustrySolid size="150px" />}
            pic={industrial}
            title={"INDUSTRIAL"}
            modalText={<Industrial />}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SectoresCard
            // pic={<MdOutlineSportsBasketball size="150px" />}
            pic={deportivo}
            title={"ZONAS DEPORTIVAS Y EVENTOS"}
            modalText={<Deportivas />}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SectoresCard
            // pic={<RiLandscapeLine size="150px" />}
            pic={paisajismo}
            title={"PAISAJISMO Y EFECTOS VISUALES"}
            modalText={<Paisajismo />}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
