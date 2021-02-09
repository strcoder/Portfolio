import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaSearch, FaVial, FaChartLine, FaPaperPlane, FaTimes, FaCloud, FaStar, FaMoon, FaCircle } from 'react-icons/fa';
import { useStateValue } from '../../context';
import './appBar.scss';

const AppBar = () => {
  const { theme, dispatch } = useStateValue();
  const [menuActive, setMenuActive] = useState(false);
  const [searchFocus, setSearchFocusActive] = useState(false);
  const newTheme: string = theme === 'light' ? 'dark' : 'light';

  return (
    <header className={`AppBar ${theme}`}>
      <div className='AppBar__header'>
        <img src='/images/logo-name.png' alt='Logo' />
        <button
          type='button'
          className='btn-link-soft'
          onClick={() => setMenuActive(true)}
        >
          <FaBars />
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
              <FaSearch />
            </button>
          </form>
          <button
            type='button'
            className='btn-link-soft'
            onClick={() => setMenuActive(false)}
          >
            <FaTimes />
          </button>
        </div>
        <nav className={`AppBar__body--nav ${theme}`}>
          <Link to='/portfolio'>
            <FaVial />
            <span>Portfolio</span>
          </Link>
          <Link to='/experience'>
            <FaChartLine />
            <span>Experience</span>
          </Link>
          <Link to='/contact'>
            <FaPaperPlane />
            <span>Contact</span>
          </Link>
        </nav>
        <div className={`AppBar__body--theme ${theme}`}>
          <p>Theme</p>
          <div>
            <button
              type='button'
              className={`ToggleSwitch ${theme}`}
              onClick={() => dispatch({ type: 'SET_THEME', theme: newTheme })}
            >
              <small className={`ToggleSwitch__body ${theme}`}>
                {theme === 'light' && (
                  <>
                    <i className='fas fa-cloud'><FaCloud /></i>
                    <i className='fas fa-cloud'><FaCloud /></i>
                    <i className='fas fa-cloud'><FaCloud /></i>
                  </>
                )}
                {theme === 'dark' && (
                  <>
                    <i className='fas fa-star'><FaStar /></i>
                    <i className='fas fa-star'><FaStar /></i>
                    <i className='fas fa-star'><FaStar /></i>
                  </>
                )}
              </small>
              <i className={`fas fa-${theme === 'light' ? 'circle' : 'moon'}`}>
                {theme === 'light' && (
                  <FaCircle />
                )}
                {theme === 'dark' && (
                  <FaMoon />
                )}
              </i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppBar;
