import React from "react";
import { Link } from "react-router-dom";
import "../Stylesheet/Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/Proyectos">Proyectos</Link>
        </li>
        <li>
          <Link to="/Acerca">Acerca de</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

