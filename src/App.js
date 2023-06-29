import React, {useEffect} from "react";
import Header from "./components/common/Header";
// import AnimatedRoutes from "./components/common/AnimatedRoutes";
import CardCarousel from "./components/inicio/CardCarousel";
import Info from "./components/inicio/Info";
import Servicios from "./components/servicios/Servicios";
import Sectores from "./components/sectores/Sectores";
import QuienSoy from "./components/acercaDe/QuienSoy";
import Puntos from "./components/acercaDe/Puntos";
import Contacto from "./components/contacto/Contacto";
import CookieConsent from "react-cookie-consent";

import "./index.css";

function App() {

  /* Scroll up the page when in load */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* Separation section for the navbar controlling scroll */
  const inicio = "inicio";
  const servicios = "servicios";
  const acercaDe = "acercaDe";
  const contacto = "contacto";


  return (
    <div className="app">
      <Header inicio={inicio} servicios={servicios} acercaDe={acercaDe} contacto={contacto} />
      {/* <AnimatedRoutes /> }  (componenente para cambiar de ruta, activar para hacer web multipágina) */}
      <section id="inicio"></section>
      <CardCarousel servicios={servicios} />
      <Info acercaDe={acercaDe} />
      <section id="servicios"></section>
      <Servicios />
      <Sectores />
      <section id="acercaDe"></section>
      <QuienSoy />
      <Puntos />
      <section id="contacto"></section>
      <Contacto />
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
