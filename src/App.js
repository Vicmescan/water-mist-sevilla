import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/common/Header";
import AnimatedRoutes from "./components/common/AnimatedRoutes";

import "./index.css";


function App() {

  return (
    <div className="app">
      <Router>
        <Header />
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;