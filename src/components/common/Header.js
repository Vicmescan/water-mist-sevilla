import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <NavLink exact to="/" activeClassName="active-link">
        Inicio
      </NavLink>
      <NavLink to="/servicios" activeClassName="active-link">
        Servicios
      </NavLink>
      <NavLink to="/acercaDe" activeClassName="active-link">
        Acerca de
      </NavLink>
      <NavLink to="/contacto" activeClassName="active-link">
        Contacto
      </NavLink>
    </nav>
  );
};

export default Header;
