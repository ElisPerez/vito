import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { AuthTypes } from "../types/AuthTypes";

const Header = () => {
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: AuthTypes.logout });
    navigate("/login");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container ">
          <a className="navbar-brand" href="/">
            Victor Avila
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          {/*  aca comienza el inicio     */}
          <div
            className="collapse navbar-collapse flex-row-reverse    "
            id="navbarNav"
          >
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link  ${isActive ? "active text-white" : ""}`
                  }
                  aria-current="page"
                  to="/home"
                >
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active text-white" : ""}`
                  }
                  to="/skills"
                >
                  Tecnologias
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active text-white" : ""}`
                  }
                  to="/proyectos"
                >
                  Proyectos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active text-white" : ""}`
                  }
                  to="/cursos"
                >
                  Cursos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active text-white" : ""}`
                  }
                  to="/contactos"
                >
                  Contacto
                </NavLink>
              </li>

              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
