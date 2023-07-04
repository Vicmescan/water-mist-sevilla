import React from "react";
import junta from "../../assets/images/junta.webp";
import enac from "../../assets/images/enac.webp";

const Logos = () => {
  return (
    <div className="logos">
      <img src={junta} alt="junta" />
      <img src={enac} alt="enac" />
    </div>
  );
};

export default Logos;
