import React from "react";
import { Container, Col } from "react-bootstrap";

const Frio = () => {
  return (
    <>
      <Container>
        <Col>
          <h4>NEBULIZACIÓN</h4>
          <p>
            La nebulización es un sistema natural de climatización que consigue
            disminuir la temperatura mediante sistemas de agua pulverizada en
            espacios abiertos o bien ventilados.
          </p>
          <p>
            Con nuestros sistemas de nebulización conseguimos una niebla
            extremadamente fina formada por unas gotas inferiores a 10 micras ,
            estas gotas absorben rápidamente la energía calorífica presente en
            el ambiente, evaporándose de forma inmediata.
          </p>
          <p>Gracia a ello conseguimos:</p>
          <ul>
            <li>Una disminución de la temperatura de hasta 10 grados</li>
            <li>
              Ahorro de energía y costes hasta un 80% con respecto a otros
              sistemas de climatización
            </li>
            <li>Reducción notable de la aparición de insectos</li>
            <li>
              Mejora de la calidad del aire contaminado por malos olores, polvo,
              polen
            </li>
            <li>Sistema de evaporación respetuoso con el medioambiente</li>
            <li>Instalación rápida y sin obras</li>
          </ul>
        </Col>
        <Col>
          <h4>BIOCLIMATIZACIÓN</h4>
          <p>
            Reducen la temperatura por enfriamiento adiabático como sus
            compañeros los sistemas de nebulización, microclima y humectación.
          </p>
          <p>
            En este caso, gracias a un sistema innovador, se toma aire del
            exterior, se enfría atravesando un filtro humedecido y se impulsa al
            interior de la nave, local o vivienda reproduciendo así el efecto de
            brisa marina.
          </p>
          <p>
            Con este sistema conseguimos ventilación con aire fresco natural,
            sano y saludable, resolviendo los problemas de calor consiguiendo
            reducir la temperatura hasta 10 ºC. Con este método logramos
            desplazar humos y olores reduciendo la pesadez del ambiente y
            aumentando el bienestar con un coste mínimo.
          </p>
        </Col>
      </Container>
    </>
  );
};

const Calor = () => {
  return <p>Calor</p>;
};

const Eventos = () => {
  return <p>Eventos</p>;
};

const Reparacion = () => {
  return (
    <>
      <p>
        La reparación es uno de nuestros servicios que abarca cualquier
        componente ya sea en baja o alta presión: electroválvulas, grupo
        filtrado, ultravioleta, sujeciones, tuberías, racores, cuadros de
        control.
      </p>
      <p>
        Todo lo necesario para que su instalación funcione correctamente. La
        rapidez es un factor esencial en este tipo de instalaciones y nosotros
        satisfacemos esa nevesidad.
      </p>
      <p>
        Disponemos de las mejores marcas y modelos, los mejores técnicos y los
        precios más competitivos del mercado.
      </p>
      <h5>No dude en consultarnos sin compromiso,</h5>
    </>
  );
};

const Legionela = () => {
  return (
    <>
      <p>
        Water Mist Sevilla se encargará de todo el aspecto sanitario de su
        instalación para que cumpla con todos los requisitos sanitarios y
        legales que exige la Ley.
      </p>
      <p>
        Nos encargamos de desarollar su Libro de Registro de Prevención de
        Legionelosis con:
      </p>
      <ul>
        <li>Programa de mantenimiento preventivo</li>
        <li>programa de limpiezas y desinfección</li>
        <li>Protocolos, registros de ejecuciones de mantenimiento</li>
        <li>
          Documentación relativas a autorizaciones sanitarias, certificados de
          formación y de limpieza,
        </li>
        <li>
          Documentación de los equipos, productos de limpieza, laboratorio y
          analíticas.
        </li>
      </ul>
      <h5>TRANQUILIDAD - SEGURIDAD, ES NUESTRO SELLO DE IDENTIDAD.</h5>
    </>
  );
};

export { Frio, Calor, Eventos, Reparacion, Legionela };
