import React from "react";
import { useState } from "react";
import "../style/Lenguajes.css";

const Lenguajes = ({ id, name, type, porcentaje, contenidos }) => {
  const path = `./assets/skills/${type}-${id}.svg`;

  const [image, setImage] = useState(false);
  const handleImg = () => {
    setImage(!image);
  };
  return (
    /* Tarteja react */
    <div className="container col col-lg-4 mb-4 lenguajes ">
      <div className=" p-3 " style={{ width: "10rem" }}>
        <img
          onClick={handleImg}
          src={path}
          className="card-img-top "
          alt="..."
          style={{ height: "100px" }}
        />

        {image && (
          <div className="card-body ">
            <h5 className="text-center mb-3 mt-3 ">{name.toUpperCase()}</h5>
            <div className="progress mb-3 mt-2 ">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: porcentaje }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <ul className="list-group">
              {contenidos.map((contenido) => (
                <li className="list-group-item" key={contenido}>
                  {contenido}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lenguajes;
