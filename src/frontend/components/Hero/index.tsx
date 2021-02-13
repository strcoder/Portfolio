import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaAngleDoubleDown,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitch,
  FaTwitter,
  FaCircleNotch,
} from 'react-icons/fa';
import { useStateValue } from '../../context';
import './hero.scss';

const Hero = () => {
  const { theme } = useStateValue();
  return (
    <section className={`Hero ${theme}`}>
      {theme === 'light' && (
        <picture className='Hero__image'>
          <source media='(min-width:1024px)' srcSet='/images/hero-white-lg.jpg' />
          <img src='/images/hero-white-sm.jpg' width='100vw' height='100vh' alt='Keyboard black' />
        </picture>
      )}
      {theme === 'dark' && (
        <picture className='Hero__image'>
          <source media='(min-width:1024px)' srcSet='/images/hero-black-lg.jpg' />
          <img src='/images/hero-black-sm.jpg' width='100vw' height='100vh' alt='Keyboard black' />
        </picture>
      )}
      <div className={`Hero--background ${theme}`} />
      <div className='Hero__body'>
        <h3>Welcome!</h3>
        <h1>I&apos;m Web Developer</h1>
        <ul className='Hero__body--details'>
          <li>ReactJS</li>
          <li><FaCircleNotch size={10} /></li>
          <li>Typescript</li>
          <li><FaCircleNotch size={10} /></li>
          <li>NodeJS</li>
        </ul>
        <nav className={`Hero__body--links ${theme}`}>
          <Link to='/facebook' className='btn-link-facebook' title='Visitame en Facebbok'>
            <FaFacebookF />
          </Link>
          <Link to='/twitter' className='btn-link-twitter' title='Visitame en Twitter'>
            <FaTwitter />
          </Link>
          <Link to='/instagram' className='btn-link-instagram' title='Visitame en Instagram'>
            <FaInstagram />
          </Link>
          <Link to='/linkedin' className='btn-link-linkedin' title='Visitame en Linkedin'>
            <FaLinkedinIn />
          </Link>
          <Link to='/twitch' className='btn-link-twitch' title='Visitame en Twitch'>
            <FaTwitch />
          </Link>
        </nav>
      </div>
      <a href='#AboutMe' className={`Hero__helper btn-link ${theme}`} title='Mostrar más contenido'>
        <FaAngleDoubleDown size={30} />
      </a>
    </section>
  );
};

export default Hero;
