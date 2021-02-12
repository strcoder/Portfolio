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
          <li><FaCircleNotch size={10} /></li>
          <li>Typescript</li>
          <li><FaCircleNotch size={10} /></li>
          <li>NodeJS</li>
        </ul>
        <nav className={`Hero__body--links ${theme}`}>
          <Link to='/' className='btn-link-facebook'>
            <FaFacebookF />
          </Link>
          <Link to='/' className='btn-link-twitter'>
            <FaTwitter />
          </Link>
          <Link to='/' className='btn-link-instagram'>
            <FaInstagram />
          </Link>
          <Link to='/' className='btn-link-linkedin'>
            <FaLinkedinIn />
          </Link>
          <Link to='/' className='btn-link-twitch'>
            <FaTwitch />
          </Link>
        </nav>
      </div>
      <a href='#AboutMe' className={`Hero__helper btn-link ${theme}`}>
        <FaAngleDoubleDown size={30} />
      </a>
    </section>
  );
};

export default Hero;
