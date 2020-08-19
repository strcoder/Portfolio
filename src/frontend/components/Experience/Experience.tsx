import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from '../ProgressBar/ProgressBar';
import { useStateValue } from '../../Context';
import './experience.scss';

const Image = require('../../static/assets/images/react.png');

const Experience = () => {
  const { theme } = useStateValue();
  const [detailsActive, setDetailsActive] = useState(false);
  return (
    <div className={`Experience ${theme}`}>
      <button type='button' className='btn-link' onClick={() => setDetailsActive(!detailsActive)}>
        <i className='fas fa-angle-left' />
      </button>
      {!detailsActive && (
        <div className='Experience__body'>
          <figure className='Experience__image'>
            <img src={Image} alt='' />
          </figure>
          <div className='Experience__bars'>
            <ProgressBar title='React JS' percentage={60} />
            <ProgressBar title='SASS' percentage={70} />
            <ProgressBar title='Typescript' percentage={30} />
          </div>
        </div>
      )}
      {detailsActive && (
        <div className='Experience__details'>
          <h3>Front-End React JS</h3>
          <p>Desarrolo de aplicaciones web utilizando la libreria ReactJS en conjunto con el preprocesador sass y Typescript</p>
          <ul>
            <li>React Hooks</li>
            <li>React Router</li>
            <li>Server Side Render</li>
            <li>Redux</li>
          </ul>
          <Link to='/' className='btn'>Conocer Más</Link>
        </div>
      )}
      <button type='button' className='btn-link' onClick={() => setDetailsActive(!detailsActive)}>
        <i className='fas fa-angle-right' />
      </button>
    </div>
  );
};

export default Experience;
