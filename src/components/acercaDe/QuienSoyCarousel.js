import Carousel from "react-bootstrap/Carousel";
import { AttentionSeeker } from "react-awesome-reveal";

function QuienSoyCarousel() {
  return (
    <Carousel interval={7000} rounded="true" className="quienSoyCarousel" >
      <Carousel.Item>
        <AttentionSeeker effect="flash" delay={500} triggerOnce="true">
          <h1 className="quienSoy-title d-none d-md-block">
            Hola, Soy Jose Yaque
          </h1>
          <h1 className="quienSoy-carousel-title d-md-none">Sobre mí</h1>
        </AttentionSeeker>
        <hr></hr>
        <br></br>
        <p>
          Tras diez años de experiencia como Responsable de un Departamento
          técnico y supervisor de procesos en una empresa de climatización y
          servicio técnico, creo
          <b> Water Mist Sevilla </b>
          para poner a tu disposición mi conocimiento del sector y ofrecerte un
          servicio de calidad con los mejores productos del mercado.
        </p>
      </Carousel.Item>
      <Carousel.Item>
        <h1 className="quienSoy-carousel-title">
          <AttentionSeeker effect="flash" delay={500} triggerOnce="true">
            <b> Water Mist Sevilla</b>
          </AttentionSeeker>
          <hr></hr>
        </h1>
        <p>
          Somos un equipo de profesionales certificados capaces de materializar
          cualquier proyecto de climatización, independientemente de su
          complejidad.<br></br>
          Nos motiva el compromiso con la excelencia e invertimos el esfuerzo y
          tiempo necesarios para conseguir la completa satisfacción de nuestros
          clientes.<br></br>
          Trabajamos con los mejores distribuidores para garantizar que nuestros
          materiales y productos tengan la calidad que mereces.
        </p>
      </Carousel.Item>
    </Carousel>
  );
}

export default QuienSoyCarousel;
