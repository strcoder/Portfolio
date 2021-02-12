import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaVial, FaChartLine, FaPaperPlane, FaTimes } from 'react-icons/fa';
import { HiMenuAlt1 } from 'react-icons/hi';
import { useStateValue } from '../../context';
import ToggleSwitch from '../ToggleSwitch';
import './appBar.scss';

const AppBar = () => {
  const { theme } = useStateValue();
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header className={`AppBar ${theme}`}>
      <div className='AppBar__header'>
        <Link to='/' className='AppBar__header--logo'>
          <img src='/images/logo-ant.png' alt='Logo' />
        </Link>
        <button
          type='button'
          className='btn-link-soft'
          onClick={() => setMenuActive(true)}
        >
          <HiMenuAlt1 size={30} />
        </button>
      </div>

      <div className={`AppBar__body ${menuActive} ${theme}`}>
        <button type='button' className={`AppBar__body--close ${theme}`} onClick={() => setMenuActive(false)}>
          <FaTimes size={20} />
        </button>
        <nav className={`AppBar__body--nav ${theme}`}>
          <a href='#Projects'>
            <FaVial />
            <span>Projects</span>
          </a>
          <a href='#Skills'>
            <FaChartLine />
            <span>Skills</span>
          </a>
        </nav>
        <div className={`AppBar__body--theme ${theme}`}>
          <p>Theme</p>
          <div>
            <ToggleSwitch />
          </div>
        </div>
        <div className={`AppBar__body--fans ${theme}`}>
          <button type='button' className='btn-disable' disabled title='Proximamente'>Buy me a coffee</button>
        </div>
      </div>
    </header>
  );
};

export default AppBar;
