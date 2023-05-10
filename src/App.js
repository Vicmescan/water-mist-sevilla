import React from "react";
import Header from "./components/common/Header";
import AnimatedRoutes from "./components/common/AnimatedRoutes";
import "./index.css";

function App() {
  return (
    <div className="app">
      <Header />
      <AnimatedRoutes />
    </div>
  );
}

export default App;
