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
      <div className='ProjectCard__header flex'>
        <figure className='ProjectCard__header--logo'>
          <img src={logo} alt='' />
        </figure>
        <div className='ProjectCard__header--links flex'>
          <a
            href={github}
            target='_blank'
            rel='noreferrer'
            title={`Ver código de ${title} en Github`}
            className={`${theme === 'light' ? 'btn-link-github' : 'btn-link-soft'}`}
          >
            <FaGithub size={20} />
          </a>
          <a
            href={url}
            target='_blank'
            rel='noreferrer'
            title={`Visitar página oficial de ${title}`}
            className={`${theme === 'light' ? 'btn-link' : 'btn-link-soft'}`}
          >
            <FaLink size={20} />
          </a>
        </div>
      </div>
      <div className='ProjectCard__body'>
        <p>{description}</p>
      </div>
      <div className='ProjectCard__footer'>
        <Link
          to={`/project/${title.toLocaleLowerCase()}`}
          title={`Ver más acerca del proyecto ${title}`}
          className={`${theme === 'light' ? 'btn-outline' : 'btn-outline-soft'}`}
        >
          Conocer más
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
