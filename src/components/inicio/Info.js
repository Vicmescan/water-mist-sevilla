import React, { useEffect } from "react";
import giralda from "../../assets/videos/giralda.mp4";
import toldo from "../../assets/videos/toldo.mp4";
import { Fade } from "react-awesome-reveal";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Info = () => {
  const [infoVideo, setInfoVideo] = React.useState(giralda);

  /* changing the video depending the width */
  useEffect(() => {
    if (window.innerWidth < 576) {
      setInfoVideo(giralda);
    } else {
      setInfoVideo(toldo);
    }
  }, []);

  return (
    <div className="info-background">
        <video src={infoVideo} autoPlay loop muted className="info-video">
          {" "}
        </video>
      <Fade delay={1000}>
        <div className="info-text">
          <h1 className="title">PROFESIONALES DE CONFIANZA</h1>
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
        </div>
      </Fade>
    </div>
  );
};

export default Info;
