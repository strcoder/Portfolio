import React from 'react';
import { FaTwitch } from 'react-icons/fa';
import { SiPlatzi } from 'react-icons/si';
import { useStateValue } from '../../context';
import './moreAboutMe.scss';

const MoreAboutMe = () => {
  const { socialMedia, theme } = useStateValue();
  return (
    <section className='MoreAboutMe' id='More'>
      <h2>Que bueno que sigues aquí, te cuento más de mi ...</h2>
      <div className={`MoreAboutMe--item twitch ${theme}`}>
        <p>
          Soy una persona agradable que le gusta compartir el conocimiento. Actualmente tengo un canal de twitch en el cual junto a mis amigos estamos creando comunidad para apoyar y solucionar retos en el ámbito tech. También me gusta jugar videojuegos y algun dia me gustaria aprender a desarrollarlos
        </p>
        <a
          href={socialMedia.twitch}
          target='_blank'
          rel='noreferrer'
          title='Visitar Armando código'
          className='MoreAboutMe--twitch btn-twitch'
        >
          <i><FaTwitch size={40} /></i>
          <span>Armando Codigo</span>
          <span>Se una más de la counidad</span>
        </a>
      </div>
      <div className={`MoreAboutMe--item platzi ${theme}`}>
        <p>
          En 2021 me inscribi a un concurso en platzi para crear una plataforma de e-commerce en tiempo record, el proyecto realizado fue Foody+ en ese proyecto yo realice la lógica del frontend y colabore conjuntamente con un personas extraordinarias de diferentes países.
        </p>
        <a
          target='_blank'
          rel='noreferrer'
          title='Visitar platzi olimpiadas'
          className='MoreAboutMe--platzi btn-platzi'
          href='https://platzi.com/blog/olimpiadas-premiacion-olympia-challenge/'
        >
          <SiPlatzi size={30} />
          <span>Ver página del reto</span>
        </a>
      </div>
      <div className={`MoreAboutMe--item platzi ${theme}`}>
        <p>
          Actualmente me encuentro desarrollando mi carrera ingeniería en computación en la UAM-C, y lo complemento estudiando de manera autodidacta y a la vez con cursos en línea dentro de la plataforma educativa plazi la cual me ha fomentado la idea de nunca parar de aprender y seguir creciendo como persona
        </p>
        <a
          rel='noreferrer'
          target='_blank'
          title='Visitar mi perfil de platzi'
          href='https://platzi.com/p/agvcoder/'
          className='MoreAboutMe--platzi btn-platzi'
        >
          <SiPlatzi size={20} />
          <span>Perfil de platzi</span>
        </a>
      </div>
    </section>
  );
};

export default MoreAboutMe;
