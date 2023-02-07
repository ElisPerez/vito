import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, type, id, description }) => {
  /* path guarda la direccion de las imagenes */
  const path = `./assets/${type}-${id}.png`;

  return (
    <>
      <div
        className="  card  m-3  p-0 mx-auto  border border-dark"
        style={{
          width: 200,
        }}
      >
        <img
          src={path}
          className="card-img-top  "
          alt={id}
          style={{ width: "100%" }}
        />
        <div className="card-body  mb-3">
          <h6 className="card-title">{name}</h6>
          <p className="card-text">{description}</p>
          <Link
            className="btn btn-info fw-bold  fs-6 text-light position-absolute fixed-bottom  mt-5  "
            to={`/Estudios/${id}`}
          >
            Ver mas
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
