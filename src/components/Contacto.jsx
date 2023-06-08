import React from "react";
import { FaEnvelope, FaPhone, FaHandPointDown, FaWhatsapp } from "react-icons/fa";
import "../Stylesheet/Contacto.css";
import PERFILCV from "../Img/PERFILCV.jpg";

function Contacto() {
  return (
    <div className="contacto container">
      <div className="contacto__content">
        <h2>Contacto</h2>
        <div>
          <div>
            <img className="contacto__perfil" src={PERFILCV} alt="Foto de perfil" />
          </div>
          <div>
            <span className="contacto__frase">"Sin junior no hay senior"</span>
            <br /><br />
            <p>"Deseo trabajar como desarrollador front-end y contribuir al desarrollo de sitios web con mis habilidades y pasión por la programación."</p>
            <div className="contacto__info">
              <div className="contacto__item">
                <FaPhone className="contacto__icono" />
                <p>Teléfono: (+503) 75010752</p>
              </div>
              <div className="contacto__item">
                <FaWhatsapp className="contacto__icono whatsapp-icon" />
                <p>WhatsApp: (+503) 75010752</p>
              </div>
              <div className="contacto__item">
                <FaEnvelope className="contacto__icono" />
                <p>Correo electrónico: juan.camposluke@gmail.com</p>
              </div>
            </div>
            <p>"¡Haz clic aquí para descubrir mi trabajo como desarrollador front-end y explorar mis redes sociales!"</p>
          </div>
        </div>
      </div>
      <div className="contacto__footer">
        <FaHandPointDown className="contacto__icono-abajo" />
      </div>
    </div>
  );
}

export default Contacto;


