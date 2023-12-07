import React, { useEffect, useState } from "react";
import fotoFrio from "../../assets/images/climatizacion exterior.webp";
import fotoCalor from "../../assets/images/calefacción.webp";
import fotoEvento from "../../assets/images/alquiler-eventos.webp";
import fotoReparacion from "../../assets/images/venta y reparacion.webp";
import fotoLegionela from "../../assets/images/legionela.webp";
// import Invierno from "../../assets/documentos/tarifasInvierno.pdf";
import { Swiper, SwiperSlide } from "swiper/react";

import ServiciosCard from "./ServiciosCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper";

const Servicios = () => {
  const [slidesPerView, setSlidesPerView] = useState(5);

  const handleResize = () => {
    if (window.innerWidth < 1200) {
      setSlidesPerView(5);
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
    <div className="servicios">
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
        className="mySwiperServicios"
      >
        <SwiperSlide>
          <ServiciosCard
            title="CLIMATIZACIÓN EXTERIOR FRÍO"
            image={fotoFrio}
            body="Conoce todas las opciones para climatizar tu negocio o vivienda
                mediante nuestros sistemas de nebulización de agua y
                evaporativos portátiles."
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiciosCard
            title="CLIMATIZACIÓN EXTERIOR CALOR"
            image={fotoCalor}
            body="  Te ayudamos a crear un ambiente cálido y agradable en cualquier
                espacio gracias a nuestros sistemas de calefacción infrarroja y
                estufas de gas."
            // link={Invierno}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiciosCard
            title="ALQUILER EVENTOS"
            image={fotoEvento}
            body="Disfruta de una idea original para refrescarte o calentarte. El mejor equipo a su servicio para instalar a su medida un confortable ambiente para su evento inolvidable. Consúltenos."
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiciosCard
            title="VENTA/REPARACIÓN"
            image={fotoReparacion}
            body="Venta, instalación y reparación de sistemas de nebulización de agua profesional. Disponemos también de calefactores eléctricos y de gas. Venta de componentes."
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServiciosCard
            title="MANTENIMIENTO HIGIÉNICO SANITARIO"
            image={fotoLegionela}
            body="Realizamos el mantenimiento higienico Sanitario de su instalación de nebulización de agua. Queremos su tranquilidad y que no se preocupen de nada."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Servicios;
