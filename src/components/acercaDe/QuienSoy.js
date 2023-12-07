import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
import { AttentionSeeker } from "react-awesome-reveal";
// import QuienSoyCarousel from "./QuienSoyCarousel";
// import jose from "../../assets/images/jose.webp";
// import Image from "react-bootstrap/Image";

const QuienSoy = () => {
  return (
    <div className="quienSoy">
      {/* <Container>
        <Row>
          <Col xs={12} sm={5} xxl={3} className="quienSoy-pictureSide">
            <AttentionSeeker effect="flash" delay={500}>
              <h1 className="quienSoy-title d-md-none p-1">
                Hola, Soy Jose Yaque
              </h1>
            </AttentionSeeker>
            <br className="d-md-none"></br>
            <Image
              src={jose}
              alt="Foto de Jose Yaque"
              rounded
              className="quienSoy-image"
            />
            <br className="d-md-none"></br>
          </Col>
          <Col xs={12} sm={7} className="quienSoy-paragraph d-xxl-none">
            <QuienSoyCarousel />
          </Col>
          <Col className="d-none d-xxl-block">
            <AttentionSeeker effect="flash" delay={500} triggerOnce="true">
              <h1 className="quienSoy-title d-none d-md-block">
                Hola, Soy Jose Yaque
              </h1>
            </AttentionSeeker>
            <hr></hr>
            <p className="quienSoy-paragraph-xxl">
              Tras diez años de experiencia como Responsable de un Departamento
              técnico y supervisor de procesos en una empresa de climatización y
              servicio técnico, creo
              <b> Water Mist Sevilla </b>
              para poner a tu disposición mi conocimiento del sector y ofrecerte
              un servicio de calidad con los mejores productos del mercado.
            </p>
          </Col>
          <Col className=" d-none d-xxl-block">
            {" "} */}
            <h1 className="quienSoy-carousel-title">
              <AttentionSeeker effect="flash" delay={500} triggerOnce="true">
                <b> Water Mist Sevilla</b>
              </AttentionSeeker>
              <hr></hr>
            </h1>
            <p className="quienSoy-paragraph">
              Somos un equipo de profesionales certificados capaces de
              materializar cualquier proyecto de climatización,
              independientemente de su complejidad.<br></br>
              Nos motiva el compromiso con la excelencia e invertimos el
              esfuerzo y tiempo necesarios para conseguir la completa
              satisfacción de nuestros clientes.<br></br>
              Trabajamos con los mejores distribuidores para garantizar que
              nuestros materiales y productos tengan la calidad que mereces.
            </p>
          {/* </Col>
        </Row>
      </Container> */}
    </div>
  );
};

export default QuienSoy;
