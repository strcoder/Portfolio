import React from 'react';
import { FaHome, FaGamepad, FaPaperPlane, FaChartLine, FaVial, FaTeamspeak } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../context';
import './pageNav.scss';

const PageNav = () => {
  const { theme } = useStateValue();
  return (
    <aside className={`PageNav ${theme}`}>
      <Link
        to='/'
        title='Ir al inicio'
        className='btn-outline-neon'
        onClick={() => window.scroll(0, 0)}
      >
        <FaHome size={25} />
        <span>Home</span>
      </Link>
      <a href='#AboutMe' className='btn-outline-neon' title='Ir a la sección acerca de mi'>
        <FaTeamspeak size={25} />
        <span>Acerca de mi</span>
      </a>
      <a href='#Skills' className='btn-outline-neon' title='Ir a la sección acerca de mis habilidades'>
        <FaChartLine size={25} />
        <span>Habilidades</span>
      </a>
      <a href='#Projects' className='btn-outline-neon' title='Ir a la sección acerca de proyectos'>
        <FaVial size={25} />
        <span>Proyectos</span>
      </a>
      <a href='#More' className='btn-outline-neon' title='Conocer más de mi'>
        <FaGamepad size={25} />
        <span>Conocer más</span>
      </a>
      <a href='#Contact' className='btn-outline-neon' title='Ir a la sección para contactarme'>
        <FaPaperPlane size={25} />
        <span>Contacto</span>
      </a>
    </aside>
  );
};

export default PageNav;
