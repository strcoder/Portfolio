import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitch } from 'react-icons/fa';
import { useStateValue } from '../../context';
import './aboutMe.scss';

const AboutMe = () => {
  const { theme, socialMedia } = useStateValue();
  return (
    <section id='AboutMe' className={`AboutMe ${theme}`}>
      <h2>{'<Acerca de mi>'}</h2>
      <picture className='AboutMe__emoji'>
        <source media='(min-width:768px)' srcSet='/images/emoji.png' />
        <source media='(min-width:425px)' srcSet='/images/emoji.png' />
        <img src='/images/emoji.png' alt='Mi emoji Saludando' width='300' height='300' />
      </picture>
      {/* <figure className='AboutMe__emoji'>
        <img src='/images/emoji.png' alt='Emoji' width='' />
      </figure> */}
      <div className='AboutMe__body'>
        <p>Hola!</p>
        <p>
          Soy antonio guzman y tengo 24 años, actualmente me encuentro estudiando la carrera de ingeniería en computación dentro de la universidad autónoma metropolitana (UAM-C)
          Me apasiona el mundo del desarrollo web, mi principal enfoque es crear aplicaciones de alto impacto en la sociedad, mis metas como desarrollador web es especializarme dentro del área fullstack ya sea en una empresa que se ajuste a mis valores o diseñar una startup que sea innovadora en el ámbito académico.
          Mis metas personales son perfeccionar el inglés, salir de mi zona de confort con nuevos retos.
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
