import React from "react";
import Lenguajes from "../components/CardLenguajeProgramacion";
import { Skills } from "../models/Skills";
import "../style/Lenguajes.css";
import manosNotebook from "../imagenes/home/Hand coding-bro 1.svg";
import { VscCode } from "react-icons/vsc";

const LenguajesProgramacion = () => {
  const lenguajes = Skills.filter((curso) => curso.type === "s");
  return (
    <>
      <div className="container contendor_lenguajes   ">
        <div className="contenedor_imagenes">
          <img src={manosNotebook} alt="" className="manosnotebook" />
          <h2 className="texto_lenguajes">
            <VscCode className="icono_vscode" /> Lenguajes
            <VscCode className="icono_vscode" />
          </h2>
        </div>

        <div className="row   mt-5 mb-5  ">
          {lenguajes.map((lenguaje, index) => (
            <Lenguajes key={index} {...lenguaje} />
          ))}
        </div>
      </div>
    </>
  );
};

export default LenguajesProgramacion;
