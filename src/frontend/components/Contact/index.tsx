import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitch, FaTwitter } from 'react-icons/fa';
import { useStateValue } from '../../context';
import { saveMessage } from '../../context/actions';
import MessageModal from '../MessageModal';
import Loading from '../Loading';
import './contact.scss';

interface FormData {
  name: string;
  email: string;
  userMessage: string;
}

const Contact = () => {
  const { socialMedia, socialMediaLoading, dispatch } = useStateValue();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setModal(true);
    setError(false);

    const message = {
      username: data.name,
      userMail: data.email,
      message: data.userMessage,
    };

    const response = await saveMessage({ message, dispatch });
    setLoading(false);

    if (response) {
      reset();
    } else {
      setError(true);
    }
  };

  return (
    <section className='Contact' id='Contact'>
      <p className='MoreAboutMe--lastP'>Por último si quieres sabes más de mi o trabajar conmigo puedes contactarme con el siguiente formulario o en mis redes sociales</p>

      {socialMediaLoading ? (
        <Loading size='small' message='' />
      ) : (
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
      )}

      <form className='MoreAboutMe--form form-control' onSubmit={handleSubmit(onSubmit)}>
        <label>
          <small>Nombre</small>
          <input
            type='text'
            placeholder='Deja tu nombre'
            className='form-input'
            {...register('name', {
              required: 'No olvides dejarme tu nombre',
            })}
          />
          {errors.name && <span className='form-error'>{errors.name.message}</span>}
        </label>
        <label>
          <small>Email</small>
          <input
            type='email'
            placeholder='Deja tu email'
            className='form-input'
            {...register('email', {
              required: 'No olvides dejarme tu correo',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Por favor digita un correo valido',
              },
            })}
          />
          {errors.email && <span className='form-error'>{errors.email.message}</span>}
        </label>
        <label>
          <small>Mensaje</small>
          <textarea
            rows={4}
            placeholder='Deja tu mensaje'
            className='form-textarea'
            {...register('userMessage', {
              required: 'No olvides dejarme tu mensaje',
            })}
          />
          {errors.userMessage && <span className='form-error'>{errors.userMessage.message}</span>}
        </label>
        <button
          type='submit'
          title='Enviar tu mensaje'
          disabled={!!(errors.userMessage || errors.email || errors.name)}
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
