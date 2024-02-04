import React from "react";
import junta from "../../assets/images/junta.webp";
import enac from "../../assets/images/enac.webp";
import lanutec from "../../assets/images/lanutec.webp";

const Logos = () => {
  return (
    <>
      <h3 className="quienSoy-title mt-5">Siguiendo la normativa de:</h3>
      <div className="logos">
        <img src={junta} alt="junta" />
        <img src={lanutec} alt="lanutec" />
        <img src={enac} alt="enac" />
      </div>
    </>
  );
};

export default Logos;
