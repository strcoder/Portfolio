import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../Context';
import './appBar.scss';

const Image = require('../../static/assets/images/logo-name.png');

const AppBar = () => {
  const { theme, dispatch } = useStateValue();
  const [menuActive, setMenuActive] = useState(false);
  const [searchFocus, setSearchFocusActive] = useState(false);
  const newTheme: string = theme === 'light' ? 'dark' : 'light';

  return (
    <header className={`AppBar ${theme}`}>
      <div className='AppBar__header'>
        <img src={Image} alt='Logo' />
        <button type='button' className='btn-link-soft' onClick={() => setMenuActive(true)}>
          <i className='fas fa-bars' />
        </button>
      </div>

      <div className={`AppBar__body ${menuActive} ${theme}`}>
        <div className='AppBar__body--search'>
          <form className='form-control form-input-icon'>
            <input
              type='text'
              placeholder='Search'
              className={`form--input ${searchFocus}`}
              onFocus={() => setSearchFocusActive(true)}
              onBlur={() => setSearchFocusActive(false)}
            />
            <button type='button' className='form-icon-btn'>
              <i className='fas fa-search' />
            </button>
          </form>
          <button type='button' className='btn-link-soft' onClick={() => setMenuActive(false)}>
            <i className='fas fa-times' />
          </button>
        </div>
        <nav className={`AppBar__body--nav ${theme}`}>
          <Link to='/briefcase'>
            <i className='fas fa-vial' />
            <span>Briefcase</span>
          </Link>
          <Link to='/experience'>
            <i className='fas fa-chart-line' />
            <span>Experience</span>
          </Link>
          <Link to='/contact'>
            <i className='fas fa-paper-plane' />
            <span>Contact</span>
          </Link>
        </nav>
        <div className={`AppBar__body--theme ${theme}`}>
          <p>Theme</p>
          <div>
            <button type='button' className={`ToggleSwitch ${theme}`} onClick={() => dispatch({ type: 'SET_THEME', theme: newTheme })}>
              <small className={`ToggleSwitch__body ${theme}`}>
                <i className={`fas fa-${theme === 'light' ? 'cloud' : 'star'}`} />
                <i className={`fas fa-${theme === 'light' ? 'cloud' : 'star'}`} />
                <i className={`fas fa-${theme === 'light' ? 'cloud' : 'star'}`} />
              </small>
              <i className={`fas fa-${theme === 'light' ? 'circle' : 'moon'}`} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppBar;
