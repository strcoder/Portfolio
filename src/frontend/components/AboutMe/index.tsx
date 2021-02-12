import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../context';
import './aboutMe.scss';

const AboutMe = () => {
  const { theme } = useStateValue();
  return (
    <section id='AboutMe' className={`AboutMe ${theme}`}>
      <h2>{'<About Me>'}</h2>
      <figure className='AboutMe__emoji'>
        <img src='/images/emoji.png' alt='Emoji' />
      </figure>
      <div className='AboutMe__body'>
        <p>Hi!, My name is Antonio Guzmán.</p>
        <p>
          I am starting in the development world, I am a front-end web
          developer and I am studying computer engineering at the
          {' '}
          <strong>UAM-C.</strong>
          {' '}
        </p>
        <p>
          I am passionate about web development, I have experience creating
          projects with
          {' '}
          <strong> HTML, CSS3 & JS </strong>
          {' '}
          and I am also
          familiar using libraries like
          {' '}
          <strong>ReactJs with Typescript</strong>
          {' '}
          and I am also interested in
          the world of mobile and games development.
        </p>
        <p className='AboutMe__footer--contact'>
          If you’d like to chat
          <Link to='/' className={`${theme === 'light' ? 'btn-link' : 'btn-link-soft'}`}>
            contact me.
          </Link>
        </p>
      </div>
      <div className={`AboutMe__footer ${theme}`}>
        You can also find me there:
        <nav>
          <Link to='/' className='btn-link-soft'>
            <FaGithub />
          </Link>
          <Link to='/' className='btn-link-soft'>
            <FaLinkedinIn />
          </Link>
          <Link to='/' className='btn-link-soft'>
            <FaTwitch />
          </Link>
        </nav>
      </div>
    </section>
  );
};

export default AboutMe;
