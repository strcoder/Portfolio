import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitch, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './contact.scss';

const Contact = () => {
  return (
    <section className='Contact' id='Contact'>
      <p className='MoreAboutMe--lastP'>Por ultimo si quieres sabes más de mi o trabajar conmigo puedes contactarme con el siguiente formulario o en mis redes sociales</p>
      <nav className='MoreAboutMe--links'>
        <Link to='/' className='btn-facebook'>
          <FaFacebookF size={30} />
        </Link>
        <Link to='/' className='btn-twitter'>
          <FaTwitter size={30} />
        </Link>
        <Link to='/' className='btn-instagram'>
          <FaInstagram size={30} />
        </Link>
        <Link to='/' className='btn-linkedin'>
          <FaLinkedinIn size={30} />
        </Link>
        <Link to='/' className='btn-twitch'>
          <FaTwitch size={30} />
        </Link>
      </nav>
      <form className='MoreAboutMe--form form-control'>
        <label htmlFor=''>
          <small>Nombre</small>
          <input type='text' placeholder='Deja tu nombre' className='form-input' />
        </label>
        <label htmlFor=''>
          <small>Email</small>
          <input type='email' placeholder='Deja tu email' className='form-input' />
        </label>
        <label htmlFor=''>
          <small>Comentario</small>
          <textarea rows={4} placeholder='Deja tu mensaje' className='form-textarea' />
        </label>
        <button type='submit' className='btn'>Enviar</button>
      </form>
      <figure className='MoreAboutMe--emoji'>
        <img src='/images/emoji2.png' alt='' />
      </figure>
    </section>
  );
};

export default Contact;
