import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Inicio from "../../routes/Inicio";
import Servicios from "../../routes/Servicios";
import AcercaDe from "../../routes/AcercaDe";
import Contacto from "../../routes/Contacto";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/acercaDe" element={<AcercaDe />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
