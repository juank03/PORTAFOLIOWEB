import React from "react";
import "../Stylesheet/Proyectos.css";

function Proyectos() {
  return (
    <div className="proyectos">
      <br />
      <h2 className="text-center">Mis Proyectos</h2>
      <br />
      <div className="proyectos__lista">
        <div className="proyecto">
          <h3>Página sencilla con HTML y CSS</h3>
          <p>
            En mi tarea de aprender front-end, decidí enfocarme en destinos turísticos y creé una página web sencilla utilizando solo HTML y CSS. Mi objetivo era practicar la estructura y el diseño básico de una página web, centrándome en el aspecto visual de los destinos.
          </p>
          <a href="https://github.com/juank03/primeros-trabajos.git" target="_blank" rel="noopener noreferrer">
            Ver en GitHub
          </a>
        </div>
        <div className="proyecto">
          <h3>Calculadora digital.</h3>
          <p>
            La calculadora que he creado es una herramienta sencilla y funcional diseñada para realizar operaciones matemáticas básicas. Utilizando JavaScript, CSS y HTML, he desarrollado una interfaz intuitiva y fácil de usar puedes probarla para ver su funcionalidad.
          </p>
          <a href="https://github.com/juank03/calculadora.git" target="_blank" rel="noopener noreferrer">
            Ver en GitHub
          </a>
        </div>
        <div className="proyecto">
          <h3>Aprendiendo Bootstrap</h3>
          <p>
            En mi tarea de aprendizaje de Bootstrap, decidí crear un portafolio para mostrar mis habilidades y proyectos. Bootstrap es un framework de front-end que me permite aprovechar su sistema de cuadrícula y componentes predefinidos para crear una página web responsiva y visualmente atractiva.
          </p>
          <a href="https://github.com/juank03/Portafolio.git" target="_blank" rel="noopener noreferrer">
            Ver en GitHub
          </a>
        </div>
        <div className="proyecto">
          <h3>Tienda de juegos de video con una API</h3>
          <p>
            En mi proyecto de desarrollo con React.js, decidí crear una tienda de juegos en línea que permitiera a los usuarios explorar, buscar y comprar juegos. Para obtener la información necesaria sobre los juegos, utilicé una API externa, consumiendo los datos en mi aplicación haciendo un crud utilizable.
          </p>
          <a href="https://github.com/juank03/React-Project.git" target="_blank" rel="noopener noreferrer">
            Ver en GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Proyectos;

