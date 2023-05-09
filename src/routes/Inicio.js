import React from "react";
import CardCarousel from "../components/inicio/CardCarousel";

import { motion } from "framer-motion";

const Inicio = () => {
  return (
    <motion.div
      className="inicio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <CardCarousel />
    </motion.div>
  );
};

export default Inicio;
