import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLink } from 'react-icons/fa';
import { useStateValue } from '../../context';
import './projectCard.scss';

const ProjectCard = ({ logo, title, headerImage, bgColor }: { logo: string, title: string, headerImage: string, bgColor: string }) => {
  const { theme } = useStateValue();
  return (
    <div className={`ProjectCard ${theme}`}>
      <picture className='ProjectCard__header--image'>
        <div className={`ProjectCard__header--back ${bgColor}`} />
        <source media='(min-width:768px)' srcSet={`${headerImage}h=750&w=1260`} />
        <source media='(min-width:425px)' srcSet={`${headerImage}h=750&w=768`} />
        <img src={`${headerImage}h=750&w=425`} alt={`${title}, ejemplifica el projecto`} width='280' height='262' />
      </picture>
      {/* <figure className='ProjectCard__header--image'>
        <div className={`ProjectCard__header--back ${bgColor}`} />
        <img src={headerImage} alt='' className='cover' />
      </figure> */}
      <picture className={`ProjectCard__image--front ${theme}`}>
        <source media='(min-width:768px)' srcSet={logo} />
        <source media='(min-width:425px)' srcSet={logo} />
        <img src={logo} alt={title} width='100' height='100' />
      </picture>
      {/* <figure className={`ProjectCard__image--front ${theme}`}>
        <img src={logo} alt='profileImage' className='contain' />
      </figure> */}
      <div className='ProjectCard__body'>
        <div className='ProjectCard__body--header flex'>
          <h2 className='ProjectCard__body--title'>{title}</h2>
          <span className={`${theme === 'light' ? 'text-neon' : 'text-soft'}`}>01/01/2021</span>
        </div>
        <p className='ProjectCard__body--description'>
          Some quick example text to build on the card title and make up the
          bulk of the card&apos;s content.
        </p>
        <div className='ProjectCard__body--tags flex'>
          <span className='tag-neon'>ReactJS</span>
          <span className='tag-neon'>Typescript</span>
          <span className='tag-neon'>SASS</span>
          <span className='tag-neon'>NodeJS</span>
        </div>
        <div className='ProjectCard__body--links flex'>
          <Link
            to='/'
            target='_blank'
            className={`${theme === 'light' ? 'btn-link-github' : 'btn-link-soft'}`}
            title={`Ver código  ${title} en Github`}
          >
            <FaGithub size={20} />
          </Link>
          <Link
            to='/'
            target='_blank'
            className={`${theme === 'light' ? 'btn-link' : 'btn-link-soft'}`}
            title={`Visitar página oficial de ${title}`}
          >
            <FaLink size={20} />
          </Link>
          <Link
            to='/project'
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
