import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaAngleDoubleDown,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { useStateValue } from '../../context';
import './hero.scss';

const Hero = () => {
  const { theme } = useStateValue();
  return (
    <section className={`Hero ${theme}`}>
      <figure className='Hero__image'>
        <img
          src={theme === 'light' ? '/images/hero2.jpg' : '/images/hero.jpg'}
          alt='Keyboard'
        />
      </figure>
      <div className={`Hero--background ${theme}`} />
      <div className='Hero__body'>
        <h3>Welcome!</h3>
        <h1>I&apos;m Web Developer</h1>
        <ul className='Hero__body--details'>
          <li>ReactJS</li>
          <li>
            <i className='fas fa-circle-notch' />
          </li>
          <li>Typescript</li>
          <li>
            <i className='fas fa-circle-notch' />
          </li>
          <li>NodeJS</li>
        </ul>
        <nav className={`Hero__body--links ${theme}`}>
          <Link to='/' className='btn-link'>
            <FaFacebookF />
          </Link>
          <Link to='/' className='btn-link'>
            <FaTwitter />
          </Link>
          <Link to='/' className='btn-link'>
            <FaInstagram />
          </Link>
          <Link to='/' className='btn-link'>
            <FaLinkedinIn />
          </Link>
          <Link to='/' className='btn-link'>
            <FaTwitch />
          </Link>
          <Link to='/' className='btn-link'>
            <FaYoutube />
          </Link>
        </nav>
      </div>
      <button type='button' className={`Hero__helper btn-link ${theme}`}>
        <FaAngleDoubleDown size={30} />
      </button>
    </section>
  );
};

export default Hero;
