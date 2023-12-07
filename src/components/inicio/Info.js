import React from "react";
import { AttentionSeeker, Fade } from "react-awesome-reveal";
import { Button } from "react-bootstrap";
import { Link } from "react-scroll";

const Info = ({ acercaDe }) => {
  return (
    <div className="info-background">
        <div className="info-text">
          <Fade duration={600} >
            <AttentionSeeker effect="bounce" delay={5000}>
              {" "}
              <h1 className="title">PROFESIONALES DE CONFIANZA</h1>
            </AttentionSeeker>
            <br></br>
            <p className="subtitle">
              Water Mist Sevilla es una Compañía experta en climatización de "frio y calor", con sede en Sevilla.
            </p>
            <p className="subtitle">
              Desde nuestro inicio, la calidad y la atención personalizada en
              todos nuestros servicios, son nuestra seña de identidad.
            </p>
            <p className="subtitle">
              Ofrecemos una amplia variedad de soluciones para todo tipo de
              necesidades de climatización, a nivel particular y empresarial.
            </p>
            <Link className="nav-Link navLink" smoth="true" to={acercaDe}>
              <Button className="service-button">Acerca de Nosotros</Button>
            </Link>
          </Fade>
        </div>
    </div>
  );
};

export default Info;
