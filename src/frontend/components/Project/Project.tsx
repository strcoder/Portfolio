import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../Context';
import './project.scss';

const Laptop = require('../../static/assets/images/laptop.png');
const Lenguajes = require('../../static/assets/images/front-end.png');

const Project = () => {
  const [imageActive, setImageActive] = useState(1);
  const { theme } = useStateValue();
  return (
    <div className={`Project ${theme}`}>
      <div className='ProjectCard'>
        <figure className='ProjectCard__image'>
          <img src={imageActive === 1 ? Laptop : Lenguajes} alt='Eduli' />
        </figure>
        <div className='ProjectCard__changer'>
          <button type='button' className='btn-link' onClick={() => setImageActive(1)}>
            <i className={`${imageActive === 1 ? 'fas' : 'far'} fa-circle`} />
          </button>
          <button type='button' className='btn-link' onClick={() => setImageActive(2)}>
            <i className={`${imageActive === 2 ? 'fas' : 'far'} fa-circle`} />
          </button>
        </div>
      </div>
      <div className='ProjectDetails'>
        <h3 className='ProjectDetails--title'>{'<Eduli>'}</h3>
        <p className='ProjectDetails--description'>Plataforma para la ayuda y el fortalecimiento de la educacion en linea</p>
        <p className='ProjectDetails--url'>
          <strong>url:</strong>
          <Link to='/' className='btn-link'>www.eduli.com</Link>
        </p>
        <p className='ProjectDetails--date'>
          <strong>date:</strong>
          01/01/2020
        </p>
        <nav className='ProjectDetails--tags'>
          <strong>Tags:</strong>
          <Link to='/' className='btn-link'>React JS</Link>
          <Link to='/' className='btn-link'>SASS</Link>
          <Link to='/' className='btn-link'>NodeJs</Link>
        </nav>
        <Link to='/' className='btn'>Conocer Más</Link>
        <h3 className='ProjectDetails--title'>{'</Eduli>'}</h3>
      </div>
    </div>
  );
};

export default Project;
