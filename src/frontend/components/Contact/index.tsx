import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitch, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './contact.scss';

const Contact = () => {
  return (
    <section className='Contact' id='Contact'>
      <p className='MoreAboutMe--lastP'>Por ultimo si quieres sabes más de mi o trabajar conmigo puedes contactarme con el siguiente formulario o en mis redes sociales</p>
      <nav className='MoreAboutMe--links'>
        <Link to='/' className='btn-facebook' title='Contactame en Facebook'>
          <FaFacebookF size={30} />
        </Link>
        <Link to='/' className='btn-twitter' title='Contactame en Twitter'>
          <FaTwitter size={30} />
        </Link>
        <Link to='/' className='btn-instagram' title='Contactame en Instagram'>
          <FaInstagram size={30} />
        </Link>
        <Link to='/' className='btn-linkedin' title='Contactame en Linkedin'>
          <FaLinkedinIn size={30} />
        </Link>
        <Link to='/' className='btn-twitch' title='Contactame en Twitch'>
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
        <button type='submit' className='btn' title='Enviar tu mensaje'>Enviar</button>
      </form>
      <picture className='MoreAboutMe--emoji'>
        <source media='(min-width:768px)' srcSet='/images/emoji2.png' />
        <source media='(min-width:425px)' srcSet='/images/emoji2.png' />
        <img src='/images/emoji2.png' alt='Mi emoji Saludando' width='450' height='450' />
      </picture>
      {/* <figure className='MoreAboutMe--emoji'>
        <img src='/images/emoji2.png' alt='' />
      </figure> */}
    </section>
  );
};

export default Contact;
