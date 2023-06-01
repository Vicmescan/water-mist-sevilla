import React from "react";
import { motion } from "framer-motion";
import QuienesSomos from "../components/acercaDe/QuienesSomos";
import QuienSoy from "../components/acercaDe/QuienSoy";
import Puntos from "../components/acercaDe/Puntos";

const AcercaDe = () => {

  return (
    <motion.div
      className="acercaDe"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <QuienSoy />
      <Puntos />
      <QuienesSomos />
    </motion.div>
  );
};

export default AcercaDe;
