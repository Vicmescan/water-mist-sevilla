import React from "react";
import { motion } from "framer-motion";
import catedral2 from "../assets/images/catedral2.webp";
import QuienesSomos from "../components/acercaDe/QuienesSomos";
import QuienSoy from "../components/acercaDe/QuienSoy";
import MobileText from "../components/acercaDe/MobileText";
import Puntos from "../components/acercaDe/Puntos";

const AcercaDe = () => {
  // const [catedral, setCatedral] = React.useState(catedral1);

  // React.useEffect(() => {
  //   if (window.innerWidth < 576) {
  //     setCatedral(catedral2);
  //   } else {
  //     setCatedral(catedral1);
  //   }
  // }, []);

  return (
    <motion.div
      className="acercaDe"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <div className="snap-container">
        <div>
          <QuienSoy />
        </div>
        <div className="snap-hole"></div>
        <div>
          <MobileText />
        </div>
        <div>
          <Puntos />
        </div>
        <div>
          <QuienesSomos />
        </div>
      </div>
    </motion.div>
  );
};

export default AcercaDe;
