import React, { useEffect, useState } from "react";
import Header from "./components/common/Header";
// import AnimatedRoutes from "./components/common/AnimatedRoutes";
import CardCarousel from "./components/inicio/CardCarousel";
import Info from "./components/inicio/Info";
import Servicios from "./components/servicios/Servicios";
import Sectores from "./components/sectores/Sectores";
import QuienSoy from "./components/acercaDe/QuienSoy";
import Puntos from "./components/acercaDe/Puntos";
import Logos from "./components/acercaDe/Logos";
import Contacto from "./components/contacto/Contacto";
import CookieConsent from "react-cookie-consent";

import giralda from "./assets/videos/giralda.mp4";
import toldo from "./assets/videos/toldo.mp4";

import {Fade} from "react-awesome-reveal";

import "./index.css";

function App() {
  /* Scroll up the page when in load */
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  /* Separation section for the navbar controlling scroll */
  // const inicio = "inicio";
  // const servicios = "servicios";
  // const sectores = "sectores";
  // const acercaDe = "acercaDe";
  // const contacto = "contacto";

  const [scrollElement, setScrollElement] = useState("inicio");

  console.log(scrollElement);

  // useEffect(() => {
  //   document.getElementById(scrollElement).scrollIntoView({behavior: "smooth"})
  // }, setScrollElement)

  const [infoVideo, setInfoVideo] = useState(toldo);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (window.innerWidth < 576) {
      setInfoVideo(giralda);
    } else {
      setInfoVideo(toldo);
    }
  }, []);

  setTimeout(() => {
    setTimeout((setOpacity(0), 5000));
  }, "1600");

  return (
    <div className="app">
      <video
        src={infoVideo}
        autoPlay
        loop
        muted
        className="info-video"
        style={{ opacity: `${opacity}` }}
      >
        {" "}
      </video>
      <Header
        // inicio={inicio}
        // servicios={servicios}
        // acercaDe={acercaDe}
        // sectores={sectores}
        // contacto={contacto}
        setScrollElement={setScrollElement}
      />
      {/* <AnimatedRoutes /> }  (componenente para cambiar de ruta, activar para hacer web multipágina) */}
      <Fade delay={1600} duration={1500} triggerOnce="true">
        <div className="snap-container">
          <div>
            <section id="inicio"></section>
            <CardCarousel />
          </div>
          <div>
            <Info />
          </div>
          <section id="servicios"></section>
          <Servicios />
          <section id="sectores"></section>
          <Sectores />
          <div>
            <section id="acercaDe"></section>
            <QuienSoy />
            <Puntos />
            <Logos />
          </div>
          <div>
            <section id="contacto"></section>
            <Contacto />
          </div>
        </div>
      </Fade>

      <CookieConsent
        location="bottom"
        buttonText="Aceptar"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        Esta página web utiliza cookies para mejorar la experiencia del usuario.
      </CookieConsent>
    </div>
  );
}

export default App;
