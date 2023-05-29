import React from "react";
import { motion } from "framer-motion";
import { Zoom } from "react-awesome-reveal";
import catedral1 from "../assets/images/catedral1.webp";
import catedral2 from "../assets/images/catedral2.webp";
import QuienesSomos from "../components/acercaDe/QuienesSomos";

const AcercaDe = () => {
  const [catedral, setCatedral] = React.useState(catedral1);

  React.useEffect(() => {
    if (window.innerWidth < 576) {
      setCatedral(catedral2);
    } else {
      setCatedral(catedral1);
    }
  }, []);

  return (
    <motion.div
      className="acercaDe"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <div className="acercaDe-container">
        <img src={catedral} alt="catedral" className="acercaDe-img" />
        <Zoom delay={1000} duration={2000} >
          <QuienesSomos />
        </Zoom>
      </div>
    </motion.div>
  );
};

export default AcercaDe;
