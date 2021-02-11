import React from 'react';
import { useStateValue } from '../../context';
import './footer.scss';

// const Image = require('../../static/assets/images/logo-min.png');

const Footer = () => {
  const { theme } = useStateValue();
  return (
    <footer className={`Footer ${theme}`}>
      <div className='Footer__head'>
        <figure className='Footer__head--image'>
          <img src='/images/logo-min.png' alt='Logo' />
        </figure>
        <h6>Diseñado con amor</h6>
      </div>
      <div className='Footer__body'>
        {/* <h3>¿Creamos algo juntos?</h3>
        <form className='form--control'>
          <label htmlFor='UserMail' className='form--label'>Dejame tu correo</label>
          <input type='email' id='UserMail' placeholder='Digita tu correo electronico' className='form--input' />
          <button type='button' className='form--button btn-tertiary'>Enviar</button>
        </form> */}
      </div>
      <div className={`Footer__copyright ${theme}`}>
        <h6>&copy; Copyright</h6>
        <h6>Diseñado por: </h6>
      </div>
    </footer>
  );
};

export default Footer;
