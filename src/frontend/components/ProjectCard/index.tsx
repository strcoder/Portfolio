import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLink } from 'react-icons/fa';
import { useStateValue } from '../../context';
import './projectCard.scss';

type ProjectCardProps = {
  url: string,
  date: string,
  logo: string,
  tags: string[],
  title: string,
  github: string,
  bgColor: string,
  headerImage: string,
  description: string,
};

const ProjectCard = ({ logo, title, date, headerImage, bgColor, tags, url, description, github }: ProjectCardProps) => {
  const { theme } = useStateValue();
  return (
    <div className={`ProjectCard ${theme}`}>
      <picture className='ProjectCard__header--image'>
        <div className={`ProjectCard__header--back ${bgColor}`} />
        <source media='(min-width:768px)' srcSet={`${headerImage}h=750&w=1260`} />
        <source media='(min-width:425px)' srcSet={`${headerImage}h=750&w=768`} />
        <img src={`${headerImage}h=750&w=425`} alt={`${title}, ejemplifica el projecto`} width='280' height='262' />
      </picture>
      <picture className={`ProjectCard__image--front ${theme}`}>
        <source media='(min-width:768px)' srcSet={logo} />
        <source media='(min-width:425px)' srcSet={logo} />
        <img src={logo} alt={title} width='100' height='100' />
      </picture>
      <div className='ProjectCard__body'>
        <div className='ProjectCard__body--header flex'>
          <h2 className='ProjectCard__body--title'>{title}</h2>
          <span className={`${theme === 'light' ? 'text-neon' : 'text-soft'}`}>{`${date}-actual`}</span>
        </div>
        <p className='ProjectCard__body--description'>
          {description}
        </p>
        <div className='ProjectCard__body--tags flex'>
          {tags.map((tag) => (
            <span key={tag} className='tag-neon'>{tag}</span>
          ))}
          {/* <span className='tag-neon'>Typescript</span>
          <span className='tag-neon'>SASS</span>
          <span className='tag-neon'>NodeJS</span> */}
        </div>
        <div className='ProjectCard__body--links flex'>
          <a
            href={github}
            target='_blank'
            rel='noreferrer'
            className={`${theme === 'light' ? 'btn-link-github' : 'btn-link-soft'}`}
            title={`Ver código de ${title} en Github`}
          >
            <FaGithub size={20} />
          </a>
          <a
            href={url}
            target='_blank'
            rel='noreferrer'
            className={`${theme === 'light' ? 'btn-link' : 'btn-link-soft'}`}
            title={`Visitar página oficial de ${title}`}
          >
            <FaLink size={20} />
          </a>
          <Link
            to={`/project/${title.toLocaleLowerCase()}`}
            className={`${theme === 'light' ? 'btn-outline' : 'btn-outline-soft'}`}
            title={`Ver más acerca del proyecto ${title}`}
          >
            Conocer más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
