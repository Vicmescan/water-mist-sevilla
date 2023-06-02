import React from "react";
import { Fade } from "react-awesome-reveal";
import catedral1 from "../../assets/images/catedral1.webp";

const Puntos = () => {

  return (
    <ul className="puntos" style={{background: `url(${catedral1})`, backgroundSize: "cover", backgroundPosition: "center"}} >
      <Fade
        delay={200}
        duration={1000}
        cascade
        direction="left"
        triggerOnce="true"
      >
        <li className="puntos-item">Autorización sanitaria reglamentaria</li>
        <li className="puntos-item">
          Número de R.O.E.S.B.A. 1300-AND-850 de la Junta de Andalucía
        </li>
        <li className="puntos-item">Seguro de Responsabilidad Civil</li>
        <li className="puntos-item">Laboratorios Homologados</li>
        <li className="puntos-item">
          Profesionales con títulos y certificaciones homologados
        </li>
      </Fade>
    </ul>
  );
};

export default Puntos;
