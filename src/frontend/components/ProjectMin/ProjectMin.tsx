import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../Context';
import './projectMin.scss';

const Image = require('../../static/assets/images/project-2.jpg');

const ProjectMin = () => {
  const { theme } = useStateValue();
  return (
    <div className={`ProjectMin ${theme}`}>
      <figure className='ProjectMin__image'>
        <img src={Image} alt='Project' />
      </figure>
      <div className='ProjectMin__body'>
        <div className='ProjectMin__body--details'>
          <h3>
            <i className='fas fa-layer-group' />
            Eduli
          </h3>
        </div>
        <div className='ProjectMin__body--actions'>
          <Link to='/' className={`btn-link${theme === 'light' ? '' : '-soft'}`}>
            <i className='fas fa-link' />
            Pagina
          </Link>
          <nav>
            <Link to='/' className='btn-link'>ReactJS</Link>
            <Link to='/' className='btn-link'>SASS</Link>
            <Link to='/' className='btn-link'>Typescript</Link>
          </nav>
          <Link to='/' className={`btn-link${theme === 'light' ? '' : '-soft'}`}>
            <i className='fas fa-info' />
            Conocer Más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectMin;
