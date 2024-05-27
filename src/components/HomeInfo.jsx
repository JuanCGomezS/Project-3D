import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hola, Soy
        <span className='font-semibold mx-2 text-white'>Juan Carlos Gomez</span>
        ☕
        <br />
        Apasionado Desarrollador de Sortware
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Conoce un poco sobre <br /> mi Experiencia y Estudios
        </p>

        <Link to='/Project-3D/about' className='neo-brutalism-white neo-btn'>
          Ver más
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Algunos de mis proyectos
        </p>

        <Link to='/Project-3D/projects' className='neo-brutalism-white neo-btn'>
          Ver más
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        ¿Deseas contactarme?
      </p>

      <Link to='/Project-3D/contact' className='neo-brutalism-white neo-btn'>
        Escribeme
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;
