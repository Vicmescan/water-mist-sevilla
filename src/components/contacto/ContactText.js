import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { Zoom } from "react-awesome-reveal";

const ContactText = () => {
  return (
    <Zoom delay={500} direction="left" >
      <div className="contactText">
        <h1>Contáctanos</h1>
        <hr></hr>
        <h4>Estámos aquí para ayudarle</h4>
        <br></br>
        <h4>
          <a className="about-link" href="tel:635489776">
            <BsFillTelephoneFill /> 635489776
          </a>
        </h4>
        <br></br>
        <h4>
          <a
            className="about-link"
            href={"mailto: watermistsevilla@gmail.com"}
            target="_blank"
            rel="noreferrer"
          >
            <GrMail /> info@watermists.com
          </a>
        </h4>
        <br></br>
      </div>
    </Zoom>
  );
};

export default ContactText;
