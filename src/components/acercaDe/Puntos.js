import React from "react";
import { Fade } from "react-awesome-reveal";

const Puntos = () => {
  return (
    <ul className="puntos">
      <Fade delay={200} duration={1000} cascade direction="left" >
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
