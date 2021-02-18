import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitch, FaTwitter } from 'react-icons/fa';
import { useStateValue } from '../../context';
import { saveMessage } from '../../context/actions';
import MessageModal from '../MessageModal';
import './contact.scss';

const Contact = () => {
  const { socialMedia, dispatch } = useStateValue();
  const { register, handleSubmit, errors } = useForm();
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async (data: any, e: any) => {
    setLoading(true);
    setModal(true);
    const message = {
      username: data.name,
      userMail: data.email,
      message: data.userMessage,
    };
    const response = await saveMessage({ message, dispatch });
    setLoading(false);
    if (response) {
      e.target.reset();
    } else {
      setError(true);
    }
  };

  return (
    <section className='Contact' id='Contact'>
      <p className='MoreAboutMe--lastP'>Por último si quieres sabes más de mi o trabajar conmigo puedes contactarme con el siguiente formulario o en mis redes sociales</p>
      <nav className='MoreAboutMe--links'>
        <a
          target='_blank'
          rel='noreferrer'
          href={socialMedia.facebook}
          className='btn-facebook'
          title='Contactame en Facebook'
        >
          <FaFacebookF size={30} />
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          href={socialMedia.twitter}
          className='btn-twitter'
          title='Contactame en Twitter'
        >
          <FaTwitter size={30} />
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          href={socialMedia.instagram}
          className='btn-instagram'
          title='Contactame en Instagram'
        >
          <FaInstagram size={30} />
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          href={socialMedia.linkedin}
          className='btn-linkedin'
          title='Contactame en Linkedin'
        >
          <FaLinkedinIn size={30} />
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          href={socialMedia.twitch}
          className='btn-twitch'
          title='Contactame en Twitch'
        >
          <FaTwitch size={30} />
        </a>
      </nav>
      <form className='MoreAboutMe--form form-control' onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor=''>
          <small>Nombre</small>
          <input
            type='text'
            name='name'
            placeholder='Deja tu nombre'
            className='form-input'
            ref={register({
              required: 'No olvides dejarme tu nombre',
            })}
          />
          {errors.name && <span className='form-error'>{errors.name.message}</span>}
        </label>
        <label htmlFor=''>
          <small>Email</small>
          <input
            type='email'
            name='email'
            placeholder='Deja tu email'
            className='form-input'
            ref={register({
              required: 'No olvides dejarme tu correo',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Por favor digita un correo valido',
              },
            })}
          />
          {errors.email && <span className='form-error'>{errors.email.message}</span>}
        </label>
        <label htmlFor=''>
          <small>Mensaje</small>
          <textarea
            rows={4}
            name='userMessage'
            placeholder='Deja tu mensaje'
            className='form-textarea'
            ref={register({
              required: 'No olvides dejarme tu mensaje',
            })}
          />
          {errors.userMessage && <span className='form-error'>{errors.userMessage.message}</span>}
        </label>
        <button
          type='submit'
          title='Enviar tu mensaje'
          disabled={!!((errors.userMessage || errors.email || errors.name))}
          className={`${(errors.userMessage || errors.email || errors.name) ? 'btn-disabled' : 'btn'}`}
        >
          Enviar
        </button>
      </form>
      <picture className='MoreAboutMe--emoji'>
        <source media='(min-width:768px)' srcSet='/images/emoji2.png' />
        <source media='(min-width:425px)' srcSet='/images/emoji2.png' />
        <img src='/images/emoji2.png' alt='Mi emoji Saludando' width='450' height='450' />
      </picture>
      <MessageModal isOpen={modal} onClosed={() => setModal(false)} isLoading={loading} isError={error} />
    </section>
  );
};

export default Contact;
