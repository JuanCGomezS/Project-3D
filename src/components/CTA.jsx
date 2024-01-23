import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        ¿Deseas contactarme? <br className='sm:block hidden' />
        ¡Escribeme!
      </p>
      <Link to='/contact' className='btn'>
        Contactar
      </Link>
    </section>
  );
};

export default CTA;
