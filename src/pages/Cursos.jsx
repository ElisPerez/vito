import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { Estudios } from '../models/Estudios';
import '../style/Cursos.css';
import queryString from 'query-string'; //Esto se saca con el siguiente comando yarn add query-string
import { useLocation, useNavigate } from 'react-router-dom';

/* Iconos react */
import { BsSearch } from 'react-icons/bs';
import { GiCancel } from 'react-icons/gi';
import { GiClick } from 'react-icons/gi';

const Cursos = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { q = '' } = queryString.parse(location.search);

  /* 
    boton se encargara de mostrar y cerrar
    inputValue se encarga de lo que usuario escriba
     estudios se encarga de mostrar el contenido en arreglos
  */
  const [boton, setBoton] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [inputValue, setInputValue] = useState(q);
  const [estudios, setEstudios] = useState([]);

  /* Aca estamos filtrando a los cursos que sean type igual a " c " */
  const cursos = Estudios.filter(curso => curso.type === 'c');

  /* Aca estamos tomando el valor de boton en caso de que sea false o true (Esto seria para abrir y cerrar) */
  const botonBuscar = () => {
    setBoton(!boton);
  };

  /* Aca se esta tomando o escrito en el input */
  const handleChange = e => {
    const value = e.target.value;

    setInputValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    navigate(`?q=${inputValue}`);
  };

  const getCursos = () => {
    if (inputValue.trim() !== '') {
      const value = inputValue.toLocaleLowerCase();
      const newValue = Estudios.filter(estudio => estudio.name.toLocaleLowerCase().includes(value));
      setEstudios(newValue);
    } else {
      setEstudios([]);
    }
  };

  useEffect(() => {
    getCursos();
  }, [q]);

  const mostrar = () => {
    setShowAll(!showAll);
    console.log(showAll);
  };
  return (
    <div className='container  mt-3 text-center  '>
      {/* Aca estoy se realiza el input del search */}

      <div className='container    mb-3'>
        <div className='input-groups'>
          {location.pathname === '/cursos' ? (
            /*             <button onClick={botonBuscar}>
              {!boton ? "Buscar" : "Cerrar"}
            </button> */
            <button className='learn-more contenedor_boton' onClick={botonBuscar}>
              <span className='circle' aria-hidden='true'>
                <span className='icon arrow'></span>
              </span>
              <span className='button-text'>
                {!boton ? 'Buscar ' : 'Cerrar'}
                {!boton ? (
                  <BsSearch className='icono_lupa_buscar' />
                ) : (
                  <GiCancel className='icono_lupa_buscar' />
                )}
              </span>
            </button>
          ) : (
            ''
          )}

          {/* Aca mostramos el input de busqueda de cursos */}
          {boton && (
            <>
              <form onSubmit={handleSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                    placeholder='Enter email'
                    value={inputValue}
                    onChange={handleChange}
                  />
                </div>
                <button type='submit' className='btn btn-primary'>
                  Submit
                </button>
              </form>
              <div className='row'>
                <h2>Results : {estudios.length}</h2>
                {estudios.length === 0 && (
                  <div className='alert alert-warning text-center'>Please busca tu mierda</div>
                )}

                {estudios.map((estudio, index) => (
                  <Card key={index} {...estudio} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Cuando boton sea false  mostra las cards (Tarjeta de los cursos) de todos los cursos*/}
      {!boton && (
        <>
          {!showAll ? (
            <div className='row justify-content-md-center'>
              {cursos.slice(0, 5).map((curso, index) => (
                <Card key={index} {...curso} />
              ))}
            </div>
          ) : (
            <div className='row justify-content-md-center'>
              {cursos.map((curso, index) => (
                <Card key={index} {...curso} />
              ))}
            </div>
          )}
          <button className='btn  boton_mostrar' onClick={mostrar}>
            {!showAll ? 'Ver mas' : 'Ver menos'}
            <GiClick className='icono_mostrasmas' />
          </button>
        </>
      )}
    </div>
  );
};

export default Cursos;
