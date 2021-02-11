import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaInstagram, FaLink, FaLinkedinIn, FaNodeJs, FaReact, FaSass, FaTwitch, FaTwitter, FaUser } from 'react-icons/fa';
import { SiIbm, SiMongodb, SiPlatzi } from 'react-icons/si';
import Hero from '../../components/Hero';
import AboutMe from '../../components/AboutMe';
// import ExperienceList from '../components/ExperienceList/ExperienceList';
import Footer from '../../components/Footer';
// import ProjectList from '../components/ProjectList/ProjectList';
import './home.scss';

const ProjectCard = ({ logo, title, headerImage, bgColor }: { logo: string, title: string, headerImage: string, bgColor: string }) => {
  return (
    <div className='ProjectCard'>
      <figure className='ProjectCard__header--image'>
        <div className={`ProjectCard__header--back ${bgColor}`} />
        <img src={headerImage} alt='' className='cover' />
      </figure>
      <figure className='ProjectCard__image--front'>
        <img src={logo} alt='profileImage' className='contain' />
      </figure>
      <div className='ProjectCard__body'>
        <div className='ProjectCard__body--header flex'>
          <h2 className='ProjectCard__body--title'>{title}</h2>
          <span>01/01/2021</span>
        </div>
        <p className='ProjectCard__body--description'>
          Some quick example text to build on the card title and make up the
          bulk of the card&apos;s content.
        </p>
        <div className='ProjectCard__body--tags flex'>
          <span className='tag-react'>ReactJS</span>
          <span className='tag-typescript'>Typescript</span>
          <span className='tag-sass'>SASS</span>
          <span className='tag-node'>NodeJS</span>
        </div>
        <div className='ProjectCard__body--links flex'>
          <Link to='/' target='_blank' className='socialmedia-icon icon-facebook'>
            <FaGithub size={20} />
          </Link>
          <Link to='/' target='_blank' className='socialmedia-icon icon-twitter'>
            <FaLink size={20} />
          </Link>
          <button type='button' className='btn-outline'>
            Conocer más
          </button>
          {/* <Link to='/' target='_blank' className='socialmedia-icon icon-slack'>
            <i className='fab fa-slack-hash' />
          </Link>
          <Link to='/' target='_blank' className='socialmedia-icon icon-dribbble'>
            <i className='fab fa-dribbble' />
          </Link> */}
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <section className='Skills'>
        <h2>Skils</h2>
        <div className='flex'>
          <div className='Skill--item'>
            <figure className='btn-react'><FaReact /></figure>
            <p>ReactJS</p>
          </div>
          <div className='Skill--item'>
            <figure className='btn-sass'><FaSass /></figure>
            <p>SASS</p>
          </div>
          <div className='Skill--item'>
            <figure className='btn-node'><FaNodeJs /></figure>
            <p>NodeJs</p>
          </div>
          <div className='Skill--item'>
            <figure className='btn-mongo'><SiMongodb /></figure>
            <p>MongoDB</p>
          </div>
        </div>
        <div className='Skills__body'>
          <p>Me considero un desarrollador web full stack ya que tengo conocimientos para crear soluciones tanto en frontend como en backend</p>
          <p>Mi principal enfoque es desarrollo de aplicaciones web mediante el framework ReactJS y utilizando como guia de estilos al preprocesador sass pero sin dejar a un lado en manejo vanilla como HTML, CSS y Javascript</p>
          <p>Puedo crear soluciones del lado del cliente como soluciones del lado del servidor</p>
          <p>Tambien puedo crear API&apos;s con NodeJS utilizando como backend a MongoDB</p>
          <p>Y siempre intento mantenerme actualizado en los temas de actualidad estudiando y practicando</p>
          <div className='flex'>
            <div className=''>
              <h6>Tecnologias frontend que mas empleo</h6>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>ReactJS</li>
                <li>Webpack</li>
                <li>Esbuild</li>
                <li>SASS</li>
                <li>NodeJS</li>
                <li>Eslint</li>
                <li>Git y Github</li>
              </ul>
            </div>
            <div className=''>
              <h6>Tecnologias backend que mas empleo</h6>
              <ul>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>NodeJS</li>
                <li>Express</li>
                <li>Passport</li>
                <li>JWT</li>
                <li>MongoDB</li>
                <li>Git y Github</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='Projects'>
        <h2>Projects</h2>
        <div className='Projects__body'>
          <ProjectCard
            logo='/images/eduli.png'
            title='Eduli'
            headerImage='https://images.pexels.com/photos/4769486/pexels-photo-4769486.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            bgColor='primary'
          />
          <ProjectCard
            logo='/images/democars.png'
            title='Democars'
            headerImage='https://images.pexels.com/photos/5733730/pexels-photo-5733730.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            bgColor='danger'
          />
          <ProjectCard
            logo='/images/armando-codigo.jpeg'
            title='Armando codigo (Patreon)'
            headerImage='https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            bgColor='twitch'
          />
        </div>
      </section>
      <section className='MoreAboutMe'>
        <h2>Que bueno que sigues aqui, te cuento mas de mi ...</h2>
        <div className='MoreAboutMe--item'>
          <p>Soy una persona agradable que le gusta compartir el conocimiento. Actualmente tengo un canal de twitch en el cual junto a mis amigos estamos creando comunidad para apoyar y solucionar retos en el ambito tech. Tambiem me gusta jugar videjuegos y algun dia me gustaria aprender a desarrollarlos</p>
          <Link to='/twitch' className='MoreAboutMe--twitch btn-twitch'>
            <i><FaTwitch size={40} /></i>
            <span>Armando Codigo</span>
            <span>Se una más de la counidad</span>
          </Link>
        </div>
        <div className='MoreAboutMe--item'>
          <p>En los ultimos meses me he apasionado con un proyecto que puede lograr un cambio en mi comunidad en el ambito educativo, empezo como un pequeño proyecto escolar con unos compañeros el cual ha ido escalando y mejorando y me ha ayudado a ir mejorando mis habilidades tecnicas y personales. Gracias a este proyecto fue que participe en el reto IBM, ahi desempeñe el rol de lider y junto a mis compañeros logramos quedar dentro de los primeros 5 lugares</p>
          <Link to='/ibm' className='MoreAboutMe--ibm btn-ibm'>
            <SiIbm size={30} />
            <span>Ver página del reto</span>
          </Link>
        </div>
        <div className='MoreAboutMe--item'>
          <p>Actualmente me encuentro desarrollando mi carrera ingenieria en computación en la UAM-C, y lo complemento estudiando de manera autodidacta y a la vez con cursos en linea dentro de la plataforma educativa plazi la cual me ha fomentado la idea de nunca parar de aprender y seguir creciendo como persona</p>
          <Link to='/platzi' className='MoreAboutMe--platzi btn-platzi'>
            <SiPlatzi size={20} />
            <span>Perfil de platzi</span>
          </Link>
        </div>
        <p className='MoreAboutMe--lastP'>Por ultimo si quieres sabes más de mi o trabajar conmigo puedes contactarme con el siguiente formulario o en mis redes sociales</p>
        <nav className='MoreAboutMe--links'>
          <Link to='/' className='btn-facebook'>
            <FaFacebookF size={30} />
          </Link>
          <Link to='/' className='btn-twitter'>
            <FaTwitter size={30} />
          </Link>
          <Link to='/' className='btn-instagram'>
            <FaInstagram size={30} />
          </Link>
          <Link to='/' className='btn-linkedin'>
            <FaLinkedinIn size={30} />
          </Link>
          <Link to='/' className='btn-twitch'>
            <FaTwitch size={30} />
          </Link>
        </nav>
        <form className='MoreAboutMe--form form-control'>
          <label htmlFor=''>
            <small>Nombre</small>
            <input type='text' placeholder='Deja tu nombre' className='form-input' />
          </label>
          <label htmlFor=''>
            <small>Email</small>
            <input type='email' placeholder='Deja tu email' className='form-input' />
          </label>
          <label htmlFor=''>
            <small>Comentario</small>
            <textarea rows={4} placeholder='Deja tu mensaje' className='form-textarea' />
          </label>
          <button type='submit' className='btn'>Enviar</button>
        </form>
        <figure className='MoreAboutMe--emoji'>
          <img src='/images/emoji2.png' alt='' />
        </figure>
      </section>
      <Footer />
      {/* <ProjectList />
      <ExperienceList /> */}
    </>
  );
};

export default HomePage;
