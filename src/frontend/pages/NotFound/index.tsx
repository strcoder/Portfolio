import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.scss';

const NotFound = () => {
  return (
    <section className='NotFound'>
      <picture className='NotFound__picture'>
        <img src='/images/not-found.svg' alt='Pagina no encontrada' width='50vw' height='50vh' />
      </picture>
      <Link to='/' className='btn' title='Regreasar al inicio'>Ir al inicio</Link>
    </section>
  );
};

export default NotFound;
