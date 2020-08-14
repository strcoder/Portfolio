import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../Context';
import './aboutMe.scss';

const Image = require('../../static/assets/images/emoji.png');

const AboutMe = () => {
  const { theme } = useStateValue();
  return (
    <section className='AboutMe'>
      <figure className='AboutMe__emoji'>
        <img src={Image} alt='Emoji' />
      </figure>
      <div className='AboutMe--contain'>
        <h2>{'<About Me>'}</h2>
        <div className='AboutMe__body'>
          <h4>Hi!, My name is Antonio Guzmán.</h4>
          <h3>I am starting in the development world, I am a front-end web developer and I am studying computer engineering at the UAM-C.</h3>
          <p>I am passionate about web development, I have experience creating projects with HTML, CSS3 & JS and I am also familiar using libraries like ReactJs & Angular and I am also interested in the world of mobile and games development.</p>
        </div>
        <div className={`AboutMe__footer ${theme}`}>
          <p className='AboutMe__footer--contact'>
            If you’d like to chat
            <Link to='/' className='btn-link'>contact me.</Link>
          </p>
          You can also find me there:
          <nav>
            <Link to='/' className='btn-link'><i className='fab fa-github' /></Link>
            <Link to='/' className='btn-link'><i className='fab fa-linkedin-in' /></Link>
          </nav>
        </div>
        <h2>{'</About Me>'}</h2>
      </div>
    </section>
  );
};

export default AboutMe;
