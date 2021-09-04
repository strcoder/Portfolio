import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitch } from 'react-icons/fa';
import { useStateValue } from '../../context';
import './aboutMe.scss';

const AboutMe = () => {
  const { theme, socialMedia } = useStateValue();
  return (
    <section id='AboutMe' className={`AboutMe ${theme}`}>
      <h3>¡Bienvenido a mi portafolio!</h3>
      <div className='AboutMe__body'>
        <p>
          Mi nombre es
          {' '}
          <strong>Antonio Guzmán</strong>
          , soy Frontend developer con ReatcJS utilizando javascript y typescript como lenguajes base.
          Soy estudiante de ingenieria de software en la Universidad Autónomo Metropolitana (UAM-C)
          Me apasiona el mundo del desarrollo web y cada día aprender algo nuevo, mi principal enfoque es crear aplicaciones de alto impacto en la sociedad, mis metas como desarrollador web es especializarme dentro del área fullstack ya sea en una empresa o startup que se ajuste a mis valores.
        </p>
        <p className='AboutMe__footer--contact'>
          Si quieres platicar un poco
          <a href='#Contact' className={`${theme === 'light' ? 'btn-link' : 'btn-link-soft'}`} title='Ponte en contacto conmigo'>
            contactame.
          </a>
        </p>
      </div>
      <div className={`AboutMe__footer ${theme}`}>
        También puedes encontrarme en:
        <nav>
          <a
            target='_blank'
            rel='noreferrer'
            href={socialMedia.github}
            className='btn-link-soft'
            title='Visitame en Github'
          >
            <FaGithub />
          </a>
          <a
            target='_blank'
            rel='noreferrer'
            href={socialMedia.linkedin}
            className='btn-link-soft'
            title='Visitame en Linkedin'
          >
            <FaLinkedinIn />
          </a>
          <a
            target='_blank'
            rel='noreferrer'
            href={socialMedia.twitch}
            className='btn-link-soft'
            title='Visitame en Twitch'
          >
            <FaTwitch />
          </a>
        </nav>
      </div>
    </section>
  );
};

export default AboutMe;
