import React from "react";
import "../Stylesheet/Acerca.css"

function Acerca() {
  return (
    <div className="acerca">
      <br />
      <h2>Sobre mí</h2>
      <p>
        Estudié del primero al noveno grado en el Centro Escolar Agustín Lináres y luego realicé el bachillerato general en el Instituto Nacional San Luis. Durante mi trayectoria laboral, he adquirido experiencia en diferentes áreas fuera del area de la tecnologia y hoy enfocado en la area de desarrollo web.
      </p>
      <p>
        Actualmente, me he enfocado en el desarrollo front-end y he adquirido conocimientos en tecnologías como HTML, CSS, JavaScript, y frameworks como React.js. Me apasiona crear experiencias interactivas y atractivas para los usuarios.
      </p>
      <p>
        Puedes descargar mi currículum para obtener más detalles sobre mi formación académica y experiencia laboral.
      </p>
      <a className="me" href="https://drive.google.com/file/d/1IQgbs0iJNeSrOA1Dqpu46Jo3TkDgZtq2/view?usp=drive_link" target="_blank" rel="noopener noreferrer" download>Descargar currículum</a>
      <br /><br />
      <p>
        Tambien puedes descargar mi currículum acerca de los conocimientos adquiridos en el area de tecnologia y sobre mi formacion en la academia de Kodigo.
      </p>
      <a className="me" href="https://drive.google.com/file/d/1208CHpom2GowPHMa24sHZ_3STak5OWVU/view?usp=drive_link" target="_blank" rel="noopener noreferrer" download>Descargar plantilla de Kodigo</a>
    </div>
   
  );
}
export default Acerca;
