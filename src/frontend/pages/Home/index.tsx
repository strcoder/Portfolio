import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLink, FaNodeJs, FaReact, FaSass, FaUser } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import Hero from '../../components/Hero';
import AboutMe from '../../components/AboutMe';
// import ExperienceList from '../components/ExperienceList/ExperienceList';
// import Footer from '../components/Footer/Footer';
// import ProjectList from '../components/ProjectList/ProjectList';
import './home.scss';

const ProjectCard = () => {
  return (
    <div className='ProjectCard'>
      <figure className='ProjectCard__header--image'>
        <div className='ProjectCard__header--back' />
        <img src='/images/reactjs.jpg' alt='' className='cover' />
      </figure>
      <figure className='ProjectCard__image--front'>
        <img src='/images/eduli.png' alt='profileImage' className='contain' />
      </figure>
      <div className='ProjectCard__body'>
        <div className='ProjectCard__body--header flex'>
          <h2 className='ProjectCard__body--title'>Eduli</h2>
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
            <FaGithub />
          </Link>
          <Link to='/' target='_blank' className='socialmedia-icon icon-twitter'>
            <FaLink />
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
              <h6>Tecnologias frontend que utilizo</h6>
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
              <h6>Tecnologias backend que utilizo</h6>
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
          <ProjectCard />
        </div>
      </section>
      {/* <ProjectList />
      <ExperienceList />
      <Footer /> */}
    </>
  );
};

export default HomePage;
