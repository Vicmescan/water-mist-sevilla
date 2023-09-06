import React from "react";
import { IconContext } from "react-icons";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { Container } from "react-bootstrap";
import { Zoom } from "react-awesome-reveal";

const Social = ({ display }) => {
  return (
    <Zoom delay={200} duration={2000} direction="left" triggerOnce="true">
      <div className="social">
        <hr className={display}></hr>
        <h1 className={`${display} justify-content-center`}>Síguenos</h1>
        <br></br>
        <Container className={`${display} justify-content-around`}>
          <a
            className="about-icons"
            href="https://www.facebook.com/profile.php?id=100091508100548"
            target="_blank"
            rel="noreferrer"
          >
            <IconContext.Provider value={{ size: "2.5rem" }}>
              <BsFacebook />
            </IconContext.Provider>
          </a>
          <a
            className="about-icons"
            href="https://www.instagram.com/watermistsevilla/"
            target="_blank"
            rel="noreferrer"
          >
            <IconContext.Provider value={{ size: "3rem" }}>
              <AiFillInstagram />
            </IconContext.Provider>
          </a>
        </Container>
      </div>
    </Zoom>
  );
};

export default Social;
