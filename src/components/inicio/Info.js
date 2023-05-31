import React  from "react";
import { AttentionSeeker, Fade } from "react-awesome-reveal";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Info = () => {
 
  return (
    <div className="info-background">
      <div className="info-text">
        <Fade delay={500} cascade>
          <AttentionSeeker effect="bounce" delay={5000}> <h1 className="title">PROFESIONALES DE CONFIANZA</h1></AttentionSeeker>
          <br></br>
          <p className="subtitle">
            Water Mist Sevilla es una Compañía experta en climatización de gran
            reputación en Andalucía, con sede en Sevilla.
          </p>
          <p className="subtitle">
            Desde nuestro inicio, la calidad y la atención personalizada en
            todos nuestros servicios, son nuestra seña de identidad.
          </p>
          <p className="subtitle">
            Ofrecemos una amplia variedad de soluciones para todo tipo de
            necesidades de climatización, a nivel particular y empresarial.
          </p>
          <Button className="service-button" as={NavLink} to="/acercaDe">
            Acerca de Nosotros
          </Button>
        </Fade>
      </div>
    </div>
  );
};

export default Info;
