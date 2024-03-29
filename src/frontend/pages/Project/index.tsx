import React from 'react';
import { Helmet } from 'react-helmet';
import { FaGithub, FaLink, FaReact, FaTwitch } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useStateValue } from '../../context';
import './project.scss';

const Project = () => {
  const { name } = useParams<{ name: string }>();
  const { theme, projects, socialMedia } = useStateValue();
  const project: any = projects.find((project: any) => project.name.toLowerCase() === name);

  return (
    <>
      {!project && (
        <h1>Loading ...</h1>
      )}
      {project && (
        <>
          <Helmet>
            <meta charSet='utf-8' />
            <title>{`Proyecto ${project.name} | Antonio Guzmán`}</title>
            <meta name='description' content={project?.description} />
          </Helmet>
          <section className='Project'>
            <div className={`ProjectHero ${theme}`}>
              <figure className='ProjectHero__image'>
                <img src={project.logoUrl} alt='Ejemplo del projecto' />
              </figure>
              <div className='ProjectHero__info'>
                <h1>{project?.name}</h1>
                <p>{project?.description}</p>
              </div>
              <div className='ProjectHero__tags'>
                <p><strong>Tecnologias</strong></p>
                {project?.tags?.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <div className='ProjectBody'>
              {project.texts.map((text: string, index: number) => (
                <div key={text} className='ProjectDetail'>
                  <figure className='ProjectDetail__image'>
                    <img src={project.images[index]} alt='Pagina de ejemplo del projecto' />
                  </figure>
                  <p className={theme}>{text}</p>
                </div>
              ))}
              <div className={`ProjectAPI ${theme}`}>
                <p>El proyecto tambien cuenta con un Backend el cual tambien puedes ver dentro de GitHub o la en su URL</p>
                <div className='flex'>
                  <a href={project?.githubAPI} target='_blank' rel='noreferrer' className='btn-github'>
                    <span>Github</span>
                    <FaGithub />
                  </a>
                  <a href={project?.url} target='_blank' rel='noreferrer' className='btn-neon'>
                    <span>API</span>
                    <FaLink />
                  </a>
                </div>
              </div>
            </div>
            <div className={`Project__footer ${theme}`}>
              <div className='Project__footer--item'>
                <p>Puedes estar actualizado con progreso del proyecto visitando el canal de twitch</p>
                <a href={socialMedia.twitch} target='_blank' rel='noreferrer' className='btn-twitch'>
                  <FaTwitch />
                  <span>Botón</span>
                </a>
              </div>
              <div className='Project__footer--item'>
                <p>Te gustaría coloborar en el proyecto</p>
                <a href='/#Contact' className='btn-neon'>
                  <FaReact />
                  <span>Colaborar</span>
                </a>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Project;
