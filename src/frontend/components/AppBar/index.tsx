import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { HiMenuAlt1 } from 'react-icons/hi';
import { FiCoffee } from 'react-icons/fi';
import { RiSunLine, RiMoonClearLine } from 'react-icons/ri';
import { useStateValue } from '../../context';
import './appBar.scss';
import setTheme from '../../context/actions';

const AppBar = () => {
  const { theme, dispatch } = useStateValue();
  const newTheme = theme === 'light' ? 'dark' : 'light';
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header className={`AppBar ${theme}`}>
      <div className='AppBar__header'>
        <Link to='/' className='AppBar__header--logo'>
          <picture>
            <source
              media='(min-width: 375px)'
              srcSet='/images/logo-ant.png'
            />
            <img src='/images/logo-min.png' alt='Logo' width='100' height='40' />
          </picture>
        </Link>
        {/* <button
          type='button'
          className='btn-link-soft'
          onClick={() => setMenuActive(true)}
        >
          <HiMenuAlt1 size={30} />
        </button> */}
      </div>

      <div className='AppBar__body'>
        <button
          type='button'
          title='Cambiar tema'
          className='btn-link-soft'
          onClick={() => setTheme({ theme: newTheme, dispatch })}
        >
          {theme === 'light' ? <RiSunLine /> : <RiMoonClearLine />}
        </button>
        <button
          type='button'
          title='Proximamente'
          className='btn-soft'
        >
          <span><FiCoffee /></span>
          <span>Buy me a coffee</span>
        </button>
      </div>

      {/* <div className={`AppBar__body ${menuActive} ${theme}`}>
        <button type='button' className={`AppBar__body--close ${theme}`} onClick={() => setMenuActive(false)}>
          <FaTimes size={20} />
        </button>
        <nav className={`AppBar__body--nav ${theme}`}>
          <a href='#Projects'>
            <span>Projects</span>
          </a>
          <a href='#Skills'>
            <span>Skills</span>
          </a>
        </nav>
        <div className={`AppBar__body--fans ${theme}`}>
          <button type='button' className='btn-disable' disabled title='Proximamente'>Buy me a coffee</button>
        </div>
        <div className={`AppBar__body--theme ${theme}`}>
          <button
            type='button'
            title='Cambiar tema'
            className='btn-link-soft'
          >
            {theme === 'light' ? <RiSunLine /> : <RiMoonClearLine />}
          </button>
        </div>
      </div> */}
    </header>
  );
};

export default AppBar;
