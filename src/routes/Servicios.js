import React from "react";

import { motion } from "framer-motion";

const Servicios = () => {
  return (
    <motion.div
      className="servicios"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 }  }}
      exit={{ opacity: 0 }}
    >
      {/* <h1>Servicios</h1> */}
    </motion.div>
  );
};

export default Servicios;
