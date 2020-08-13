import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../Context';
import './hero.scss';

const Light = require('../../static/assets/images/hero2.jpg');
const Dark = require('../../static/assets/images/hero.jpg');

const Hero = () => {
  const { theme } = useStateValue();
  return (
    <section className={`Hero ${theme}`}>
      <figure className='Hero__image'>
        <img src={theme === 'light' ? Light : Dark} alt='Keyboard' />
      </figure>
      <div className={`Hero--background ${theme}`} />
      <div className='Hero__body'>
        <h3>Welcome!</h3>
        <h1>I&apos;m Web Developer</h1>
        <ul className='Hero__body--details'>
          <li>ReactJS</li>
          <li><i className='fas fa-circle-notch' /></li>
          <li>Angular</li>
          <li><i className='fas fa-circle-notch' /></li>
          <li>NodeJS</li>
        </ul>
        <nav className={`Hero__body--links ${theme}`}>
          <Link to='/' className='btn-link'><i className='fab fa-facebook-f' /></Link>
          <Link to='/' className='btn-link'><i className='fab fa-twitter' /></Link>
          <Link to='/' className='btn-link'><i className='fab fa-instagram' /></Link>
          <Link to='/' className='btn-link'><i className='fab fa-linkedin-in' /></Link>
          <Link to='/' className='btn-link'><i className='fab fa-twitch' /></Link>
          <Link to='/' className='btn-link'><i className='fab fa-youtube' /></Link>
        </nav>
      </div>
      <button type='button' className={`Hero__helper btn-link ${theme}`}>
        <i className='fas fa-angle-double-down' />
      </button>
    </section>
  );
};

export default Hero;
