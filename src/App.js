import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "../src/components/Inicio";
import Navigation from "../src/components/Navigation";
import Acerca from "../src/components/Acerca"
import Proyectos from "../src/components/Proyectos";
import Contacto from "../src/components/Contacto"
import Footer from "../src/components/Footer"

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <br />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Proyectos" element={<Proyectos />} />
          <Route path="/Acerca" element={<Acerca />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
        <br /><br />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
