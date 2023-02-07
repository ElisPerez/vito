import React from "react";
import { ProyectosJSON } from "../models/ProyectosJSON";
import CardProyecto from "../components/CardProyecto";
import { HiArrowDown } from "react-icons/hi2";

/* importaciones css */
import "../style/Proyectos.css";

const Proyectos = () => {
  /* tengo filtrando la busqueda de los proyectos  de archivo "Proyectos" */
  const proyectosCards = ProyectosJSON.filter(
    (proyectoJSON) => proyectoJSON.type === "p"
  );

  return (
    <div className="contenedor_proyectos container   col-8 mt-2  ">
      <h2 className="mt-5">Mis trabajos mas recientes</h2>
      <h5 className="mt-5">
        Aqui algunos de mis proyectos en los que he trabajado <HiArrowDown />
      </h5>

      <div className="row  cards_proyectos   ">
        {proyectosCards.map((proyectoCard, index) => (
          <CardProyecto key={index} {...proyectoCard} />
        ))}
      </div>
    </div>
  );
};
/*  */
export default Proyectos;
