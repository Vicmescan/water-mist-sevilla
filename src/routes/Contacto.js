import React from "react";

import { motion } from "framer-motion";

const Contacto = () => {
  return (
    <motion.div
      className="contacto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 }  }}
      exit={{ opacity: 0 }}
    >
      <h1>Contacto</h1>
    </motion.div>
  );
};

export default Contacto;
