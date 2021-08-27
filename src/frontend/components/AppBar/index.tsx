import React from 'react';
import { Link } from 'react-router-dom';
import { FiCoffee } from 'react-icons/fi';
import { RiSunLine, RiMoonClearLine } from 'react-icons/ri';
import { useStateValue } from '../../context';
import './appBar.scss';
import setTheme from '../../context/actions';

const AppBar = () => {
  const { theme, dispatch } = useStateValue();
  const newTheme = theme === 'light' ? 'dark' : 'light';

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
    </header>
  );
};

export default AppBar;
