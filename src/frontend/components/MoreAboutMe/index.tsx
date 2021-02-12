import React from 'react';
import { FaTwitch } from 'react-icons/fa';
import { SiIbm, SiPlatzi } from 'react-icons/si';
import { Link } from 'react-router-dom';
import './moreAboutMe.scss';

const MoreAboutMe = () => {
  return (
    <section className='MoreAboutMe' id='More'>
      <h2>Que bueno que sigues aqui, te cuento mas de mi ...</h2>
      <div className='MoreAboutMe--item twitch'>
        <p>Soy una persona agradable que le gusta compartir el conocimiento. Actualmente tengo un canal de twitch en el cual junto a mis amigos estamos creando comunidad para apoyar y solucionar retos en el ambito tech. Tambiem me gusta jugar videjuegos y algun dia me gustaria aprender a desarrollarlos</p>
        <Link to='/twitch' className='MoreAboutMe--twitch btn-twitch'>
          <i><FaTwitch size={40} /></i>
          <span>Armando Codigo</span>
          <span>Se una más de la counidad</span>
        </Link>
      </div>
      <div className='MoreAboutMe--item ibm'>
        <p>En los ultimos meses me he apasionado con un proyecto que puede lograr un cambio en mi comunidad en el ambito educativo, empezo como un pequeño proyecto escolar con unos compañeros el cual ha ido escalando y mejorando y me ha ayudado a ir mejorando mis habilidades tecnicas y personales. Gracias a este proyecto fue que participe en el reto IBM, ahi desempeñe el rol de lider y junto a mis compañeros logramos quedar dentro de los primeros 5 lugares</p>
        <Link to='/ibm' className='MoreAboutMe--ibm btn-ibm'>
          <SiIbm size={30} />
          <span>Ver página del reto</span>
        </Link>
      </div>
      <div className='MoreAboutMe--item platzi'>
        <p>Actualmente me encuentro desarrollando mi carrera ingenieria en computación en la UAM-C, y lo complemento estudiando de manera autodidacta y a la vez con cursos en linea dentro de la plataforma educativa plazi la cual me ha fomentado la idea de nunca parar de aprender y seguir creciendo como persona</p>
        <Link to='/platzi' className='MoreAboutMe--platzi btn-platzi'>
          <SiPlatzi size={20} />
          <span>Perfil de platzi</span>
        </Link>
      </div>
    </section>
  );
};

export default MoreAboutMe;
