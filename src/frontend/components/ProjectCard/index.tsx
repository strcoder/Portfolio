import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLink } from 'react-icons/fa';
import { useStateValue } from '../../context';
import './projectCard.scss';

const ProjectCard = ({ logo, title, headerImage, bgColor }: { logo: string, title: string, headerImage: string, bgColor: string }) => {
  const { theme } = useStateValue();
  return (
    <div className={`ProjectCard ${theme}`}>
      <figure className='ProjectCard__header--image'>
        <div className={`ProjectCard__header--back ${bgColor}`} />
        <img src={headerImage} alt='' className='cover' />
      </figure>
      <figure className={`ProjectCard__image--front ${theme}`}>
        <img src={logo} alt='profileImage' className='contain' />
      </figure>
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
          <Link to='/' target='_blank' className={`${theme === 'light' ? 'btn-link-github' : 'btn-link-soft'}`}>
            <FaGithub size={20} />
          </Link>
          <Link to='/' target='_blank' className={`${theme === 'light' ? 'btn-link' : 'btn-link-soft'}`}>
            <FaLink size={20} />
          </Link>
          <Link
            to='/project'
            className={`${theme === 'light' ? 'btn-outline' : 'btn-outline-soft'}`}
          >
            Conocer más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
