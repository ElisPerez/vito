import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../style/LoginScreen.css";
import { AuthTypes } from "../types/AuthTypes";

const LoginScreen = () => {
  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch({ type: AuthTypes.login });

    navigate("/");
  };

  return (
    <div className=" loginScreen_contenedor">
      <div className="  ">
        <div className=" ">
          <h3>Hola</h3>
          <h3>Mi nombre es victor si sabe</h3>
        </div>

        <div className="containerButton">
          <button onClick={handleLogin} className="boton cta">
            <span>Y te presento mi portafolio</span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
