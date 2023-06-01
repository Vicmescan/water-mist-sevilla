import React, { useEffect, useState} from "react";
import { Fade } from "react-awesome-reveal";
import catedral1 from "../../assets/images/catedral1.webp";
import catedral2 from "../../assets/images/catedral2.webp";

const Puntos = () => {
  const [catedral, setCatedral] = useState(catedral1);

  useEffect(() => {
    if (window.innerWidth < 576) {
      setCatedral(catedral1);
    } else {
      setCatedral(catedral2);
    }
  }, []);

  return (
    <ul className="puntos" style={{background: `url(${catedral})`, backgroundSize: "cover", backgroundPosition: "center"}} >
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
