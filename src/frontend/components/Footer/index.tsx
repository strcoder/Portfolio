import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../context';
import './footer.scss';

// const Image = require('../../static/assets/images/logo-min.png');

const Footer = () => {
  const { theme } = useStateValue();
  return (
    <footer className={`Footer ${theme}`}>
      <div className='Footer__head'>
        <picture className='Footer__head--image'>
          <source media='(min-width:768px)' srcSet='/images/logo-min.png' />
          <source media='(min-width:425px)' srcSet='/images/logo-min.png' />
          <img src='/images/logo-min.png' alt='Antonio Guzmán' width='150' height='150' />
        </picture>
        {/* <figure className='Footer__head--image'>
          <img src='/images/logo-min.png' alt='Logo' />
        </figure> */}
        <small>Diseñado con amor</small>
        <p>En colaboración con:</p>
        <Link to='/' className='btn-link-soft'>
          Armando Cruz
        </Link>
        {/* <p>Gracias por llegar hasta aqu. Nos vemos pronto</p>
        <Link to='/' className='btn-accent'>Aqui pudes encontrar mi curriculum</Link> */}
      </div>
      <div className='Footer__body'>
        <h3>¿Creamos algo juntos?</h3>
        <form className='form-control'>
          <label htmlFor='UserMail' className='form-label'>
            <span>Dejame tu correo</span>
            <input type='email' id='UserMail' placeholder='Digita tu correo electronico' className='form-input' />
          </label>
          <button type='button' className='form-button btn-tertiary'>Enviar</button>
        </form>
      </div>
      <div className={`Footer__copyright ${theme}`}>
        <p>&copy; Copyright</p>
        <Link to='/' className='btn-link-soft'>Curriculum</Link>
        <Link to='/' className='btn-link-soft'>Buy me a coffee</Link>
      </div>
    </footer>
  );
};

export default Footer;
