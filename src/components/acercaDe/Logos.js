import React from "react";
import junta from "../../assets/images/junta.webp";
import enac from "../../assets/images/enac.webp";
import lanutec from "../../assets/images/lanutec.webp";

const Logos = () => {
  return (
    <>
      <div className="logos d-flex justify-content-center align-items-center">
        <img src={enac} alt="enac" />
        <div>
          <p className="text-center mt-5" style={{fontStyle: "italic", fontWeight: "bold", color: "rgb(42,124,111)"}}>Siguiendo la normativa de:</p>
          <img src={junta} alt="junta" />
        </div>
        <img src={lanutec} alt="lanutec" />
      </div>
    </>
  );
};

export default Logos;