import React from "react";
import imagenes from "../imagenes/logo.png";
import "../style/Footer.css";
import { AiFillGithub, AiFillMail, AiFillLinkedin } from "react-icons/ai";

import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="container-fluid bg-dark vh-50    ">
      <div className=" footerContainer  mb-5   ">
        <img
          className="img-fluid "
          style={{
            width: 200,
            height: 200,
          }}
          src={imagenes}
          alt="Logo"
        />
      </div>

      <div className=" container   footerContainer logos  ">
        <a
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/victor-alejandro-avila-brice%C3%B1o-0088131a3/"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>
        <a
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/victor-alejandro-avila-brice%C3%B1o-0088131a3/"
          target="_blank"
        >
          <AiFillGithub />
        </a>
        <a
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/victor-alejandro-avila-brice%C3%B1o-0088131a3/"
          target="_blank"
        >
          <AiFillMail />
        </a>
        <div className="container footerContainer  text-white margin__derechos   ">
          <h6>
            Realizado por <BiCopyright className="hovers" /> Victor Avila
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
