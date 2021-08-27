import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../context';
import './footer.scss';

const Footer = () => {
  const { theme } = useStateValue();

  return (
    <footer className={`Footer ${theme}`}>
      <div className={`Footer__copyright ${theme}`}>
        <p>&copy; Antonio Guzman - 2021</p>
        <a
          target='_blank'
          rel='noreferrer'
          className='btn-link-soft'
          href='/pdf/CV-Antonio-es.pdf'
        >
          Curriculum
        </a>
        <Link to='/' className='btn-link-soft'>Buy me a coffee</Link>
      </div>
    </footer>
  );
};

export default Footer;
