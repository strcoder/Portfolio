import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitch,
  FaTwitter,
  FaCircleNotch,
} from 'react-icons/fa';
import { useStateValue } from '../../context';
import Loading from '../Loading';
import './hero.scss';

const Hero = () => {
  const { theme, socialMedia, socialMediaLoading, t } = useStateValue();

  return (
    <section className={`Hero ${theme}`}>
      <div className={`Hero--background ${theme}`} />
      <div className='Hero__body'>
        <h3>{t.hero.welcome}</h3>
        <h1>{t.hero.title}</h1>
        <ul className='Hero__body--details'>
          <li>ReactJS</li>
          <li><FaCircleNotch size={10} /></li>
          <li>Typescript</li>
          <li><FaCircleNotch size={10} /></li>
          <li>NodeJS</li>
        </ul>
        {socialMediaLoading ? (
          <Loading size='small' message='' />
        ) : (
          <nav className={`Hero__body--links ${theme}`}>
            <a
              target='_blank'
              rel='noreferrer'
              href={socialMedia.facebook}
              title={t.hero.visitFacebook}
              className='btn-link-facebook'
            >
              <FaFacebookF />
            </a>
            <a
              target='_blank'
              rel='noreferrer'
              href={socialMedia.twitter}
              className='btn-link-twitter'
              title={t.hero.visitTwitter}
            >
              <FaTwitter />
            </a>
            <a
              target='_blank'
              rel='noreferrer'
              href={socialMedia.instagram}
              className='btn-link-instagram'
              title={t.hero.visitInstagram}
            >
              <FaInstagram />
            </a>
            <a
              target='_blank'
              rel='noreferrer'
              href={socialMedia.linkedin}
              className='btn-link-linkedin'
              title={t.hero.visitLinkedin}
            >
              <FaLinkedinIn />
            </a>
            <a
              target='_blank'
              rel='noreferrer'
              href={socialMedia.twitch}
              className='btn-link-twitch'
              title={t.hero.visitTwitch}
            >
              <FaTwitch />
            </a>
          </nav>
        )}
      </div>
    </section>
  );
};

export default Hero;
