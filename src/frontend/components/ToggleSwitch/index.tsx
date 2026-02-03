import React from 'react';
import { FaCloud, FaStar, FaMoon, FaCircle } from 'react-icons/fa';
import { useStateValue } from '../../context';
import './toggleSwitch.scss';

const ToggleSwitch = () => {
  const { theme, toggleTheme } = useStateValue();

  return (
    <button
      type='button'
      className={`ToggleSwitch ${theme}`}
      onClick={toggleTheme}
      title='Cambiar tema'
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
        {theme === 'light' && <FaCircle />}
        {theme === 'dark' && <FaMoon />}
      </i>
    </button>
  );
};

export default ToggleSwitch;
