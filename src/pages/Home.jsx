import React from "react";
import "../style/Home.css";

import avatar from "../imagenes/home/Avatar-Maker.svg";

import waveCentral from "../imagenes/home/waveCentral.svg";
import LenguajesProgramacion from "./LenguajesProgramacion";
import Proyectos from "./Proyectos";
import Cursos from "./Cursos";

const Home = () => {
  return (
    <>
      <div className=" vh-100 contenedor_home  ">
        <div className="contenedor_imagen_avatar">
          <h2 className="texto_avatar">Desarrollador Fronted y Backend</h2>
          <h2 className="texto_avatar">Creciendo Contastemente</h2>
          {/*         <img src={fondoAvatar} className="fondo_avatar" alt="" />
           */}{" "}
          <img src={avatar} className="home_avatar" alt="" />
        </div>
        <img src={waveCentral} className="wave_contenedor " alt="" />
      </div>
      {/* Estamos agregando la descripcion de mi persona */}
      <div className="vh-50 ">
        <div className="contenedor_home_segundaparte">
          <p>
            Hola, Mi nombre es Victor. Es un Placer conocerte Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Accusantium expedita quia
            delectus, deserunt non deleniti consequatur adipisci quas illo eos
            quos quisquam cumque cum, ea placeat! Nam quas expedita tempora?
          </p>
        </div>
      </div>

      {/* Aca estamos agregando todo la parte de lenguajes de programacion */}
      <div className="">
        <LenguajesProgramacion />
      </div>
      {/* Aca se agregan todos los proyectos  */}
      <div className="">
        <Proyectos />
        <hr className="m-0" />
      </div>

      {/* Aca agregamos todos los cursos */}
      <div className="">
        <Cursos />
      </div>
    </>
  );
};

export default Home;
