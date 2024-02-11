import React from "react";
import junta from "../../assets/images/junta.webp";
import enac from "../../assets/images/enac.webp";
import lanutec from "../../assets/images/lanutec.webp";

const Logos = () => {
  return (
    <>
      <div className="logos d-flex flex-column justify-content-center align-items-center">
        <div>
          <img src={enac} alt="enac" />
          <img src={lanutec} alt="lanutec" />
        </div>
        <div>
          <p className="text-center" style={{fontStyle: "italic", fontWeight: "bold", color: "rgb(42,124,111)", fontSize: "10px"}}>Siguiendo la normativa de:</p>
          <img src={junta} alt="junta" />
        </div>
      </div>
    </>
  );
};

export default Logos;