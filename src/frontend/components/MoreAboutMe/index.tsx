import React from 'react';
import { FaTwitch } from 'react-icons/fa';
import { SiIbm, SiPlatzi } from 'react-icons/si';
import { useStateValue } from '../../context';
import './moreAboutMe.scss';

const MoreAboutMe = () => {
  const { socialMedia } = useStateValue();
  return (
    <section className='MoreAboutMe' id='More'>
      <h2>Que bueno que sigues aquí, te cuento más de mi ...</h2>
      <div className='MoreAboutMe--item twitch'>
        <p>
          Soy una persona agradable que le gusta compartir el conocimiento. Actualmente tengo un canal de twitch en el cual junto a mis amigos estamos creando comunidad para apoyar y solucionar retos en el ámbito tech. También me gusta jugar videojuegos y algun dia me gustaria aprender a desarrollarlos
        </p>
        <a
          href={socialMedia.twitch}
          target='_blank'
          rel='noreferrer'
          className='MoreAboutMe--twitch btn-twitch'
          title='Visitar ArmandoCodigo'
        >
          <i><FaTwitch size={40} /></i>
          <span>Armando Codigo</span>
          <span>Se una más de la counidad</span>
        </a>
      </div>
      <div className='MoreAboutMe--item ibm'>
        <p>
          En los últimos meses me he apasionado con un proyecto que puede lograr un cambio en mi comunidad en el ámbito educativo, empezó como un pequeño proyecto escolar con unos compañeros el cual ha ido escalando y mejorando y me ha ayudado a ir mejorando mis habilidades técnicas y personales. Gracias a este proyecto fue que participe en el reto IBM, ahí desempeñe el rol de líder y junto a mis compañeros logramos quedar dentro de los primeros 5 lugares
        </p>
        <a
          href='https://www.developer-land.tv/retos/educacion-remota-con-ibm/'
          target='_blank'
          rel='noreferrer'
          className='MoreAboutMe--ibm btn-ibm'
          title='Visitar reto de IBM'
        >
          <SiIbm size={30} />
          <span>Ver página del reto</span>
        </a>
      </div>
      <div className='MoreAboutMe--item platzi'>
        <p>
          Actualmente me encuentro desarrollando mi carrera ingeniería en computación en la UAM-C, y lo complemento estudiando de manera autodidacta y a la vez con cursos en línea dentro de la plataforma educativa plazi la cual me ha fomentado la idea de nunca parar de aprender y seguir creciendo como persona
        </p>
        <a
          href='https://platzi.com/p/strcoder/'
          target='_blank'
          rel='noreferrer'
          className='MoreAboutMe--platzi btn-platzi'
          title='Visitar mi perfil de platzi'
        >
          <SiPlatzi size={20} />
          <span>Perfil de platzi</span>
        </a>
      </div>
    </section>
  );
};

export default MoreAboutMe;
