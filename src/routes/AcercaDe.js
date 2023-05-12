import React from "react";

import { motion } from "framer-motion";

const AcercaDe = () => {
  return (
    <motion.div
      className="acercaDe"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <h1>Acerca de</h1>
    </motion.div>
  );
};

export default AcercaDe;
