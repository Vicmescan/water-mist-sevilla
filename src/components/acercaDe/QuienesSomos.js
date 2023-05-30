import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";

const QuienesSomos = () => {
  return (
    <div className="quienesSomos">
      <Fade delay={200} duration={2200} cascade >
        <h1 className="quienesSomos-title">¿Quiénes Somos?</h1>
        <p className="quienesSomos-paragraph">
          Somos un equipo de profesionales certificados capaces de materializar
          cualquier proyecto de climatización, independientemente de su
          complejidad. Nos motiva el compromiso con la excelencia e invertimos
          el esfuerzo y tiempo necesarios para conseguir la completa
          satisfacción de nuestros clientes. Trabajamos con los mejores
          distribuidores para garantizar que nuestros materiales y productos
          tengan la calidad que mereces.
        </p>
        <p className="quienesSomos-paragraph">
          Póngase en contacto con nosotros para concertar una cita sin
          compromiso.
        </p>
        <Button className="quienesSomos-button" as={NavLink} to="/contacto">
          Contactar
        </Button>

      </Fade>
    </div>
  );
};

export default QuienesSomos;
