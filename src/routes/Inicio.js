import React from "react";

import { motion } from "framer-motion";

const Inicio = () => {
  return (
    <motion.div
      className="inicio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <h1>Inicio</h1>
    </motion.div>
  );
};

export default Inicio;
