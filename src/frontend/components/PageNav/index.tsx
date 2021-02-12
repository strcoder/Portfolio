import React from 'react';
import { FaHome, FaGamepad, FaPaperPlane, FaChartLine, FaVial, FaTeamspeak } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../context';
import './pageNav.scss';

const PageNav = () => {
  const { theme } = useStateValue();
  return (
    <aside className={`PageNav ${theme}`}>
      <Link to='/' className='btn-outline-neon' onClick={() => window.scroll(0, 0)}>
        <FaHome size={25} />
        <span>Home</span>
      </Link>
      <a href='#AboutMe' className='btn-outline-neon single-line'>
        <FaTeamspeak size={25} />
        <span>About me</span>
      </a>
      <a href='#Skills' className='btn-outline-neon'>
        <FaChartLine size={25} />
        <span>Skills</span>
      </a>
      <a href='#Projects' className='btn-outline-neon'>
        <FaVial size={25} />
        <span>Projects</span>
      </a>
      <a href='#More' className='btn-outline-neon'>
        <FaGamepad size={25} />
        <span>More</span>
      </a>
      <a href='#Contact' className='btn-outline-neon'>
        <FaPaperPlane size={25} />
        <span>Contact</span>
      </a>
    </aside>
  );
};

export default PageNav;
