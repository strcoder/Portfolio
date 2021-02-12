import React from 'react';
import { FaFacebookF, FaGithub, FaHome, FaLink, FaReact, FaTwitch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../context';
import './project.scss';

const PageNav = () => {
  const { theme } = useStateValue();
  return (
    <aside className={`PageNav ${theme}`}>
      <Link to='/' className='btn-outline-neon' onClick={() => window.scroll(0, 0)}>
        <FaHome size={25} />
        <span>Home</span>
      </Link>
    </aside>
  );
};

const Project = () => {
  const { theme } = useStateValue();
  return (
    <>
      <PageNav />
      <section className='Project'>
        <div className={`ProjectHero ${theme}`}>
          <figure className='ProjectHero__image'>
            <img src='/images/laptop.png' alt='Ejemplo del projecto o algo' />
          </figure>
          <div className='ProjectHero__info'>
            <h1>ProjectName</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed odit sunt fugit expedita corrupti autem sit nam iure totam temporibus dicta eaque nesciunt voluptatibus deserunt voluptate, modi, magni asperiores odio.</p>
            <div className='flex'>
              <Link to='/' className='btn-link-white'>
                <FaFacebookF />
              </Link>
              <Link to='/' className='btn-link-white'>
                <FaFacebookF />
              </Link>
            </div>
          </div>
          <div className='ProjectHero__tags'>
            <p><strong>Tecnologias</strong></p>
            <span>React</span>
            <span>Sass</span>
            <span>Typescript</span>
            <span>Node</span>
          </div>
        </div>
        <div className='ProjectBody'>
          {[1, 2, 3].map((item) => (
            <div key={item} className='ProjectDetail'>
              <figure className='ProjectDetail__image'>
                <img src='/images/project-2.jpg' alt='Otra imagen de ejmplo' />
              </figure>
              <p className={theme}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit modi autem optio nemo cupiditate? Impedit similique quisquam harum modi neque sequi voluptate aliquid voluptates aut. Reiciendis, incidunt? Deserunt, mollitia earum?</p>
            </div>
          ))}
          <div className={`ProjectAPI ${theme}`}>
            <p>El proyecto tambien cuenta con un Backend el cual tambien puedes ver dentro de GitHub o la en su URL</p>
            <div className='flex'>
              <Link to='/github' className='btn-github'>
                <span>Github</span>
                <FaGithub />
              </Link>
              <Link to='/link' className='btn-neon'>
                <span>API</span>
                <FaLink />
              </Link>
            </div>
          </div>
        </div>
        <div className={`Project__footer ${theme}`}>
          <div className='Project__footer--header'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum unde sit saepe error dignissimos molestiae ex, dolorem, maxime esse ducimus deserunt, natus nulla eligendi tempora. Magnam perspiciatis illo tenetur ut.</p>
          </div>
          <div className='Project__footer--item'>
            <p>Puedes estar actualizado con progreso del proyecto visitando el canal de twitch</p>
            <Link to='/twitch' className='btn-twitch'>
              <FaTwitch />
              <span>Botón</span>
            </Link>
          </div>
          <div className='Project__footer--item'>
            <p>Te gustaría coloborar en el proyecto</p>
            <Link to='/together' className='btn-neon'>
              <FaReact />
              <span>Colaborar</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
