import React from 'react';
import { Box, Link, Typography } from 'eduli-ui';
import './AboutMe.scss';

const AboutMe = () => {
  return (
    <Box component='section' id='AboutMe' className='AboutMe'>
      <Typography component='h3' variant='h3'>
        ¡Bienvenido a mi portafolio!
      </Typography>
      <Box className='AboutMe__body' display='grid' gap='sm'>
        <Typography>
          {' '}
          Mi nombre es
          {' '}
          <Typography component='strong'>Antonio Guzmán</Typography>
        </Typography>
        <Typography>
          Soy un desarrollador web con más de 5 años de experiencia. Estoy
          enfocado en la creación de soluciones de alto impacto, trabajando en
          equipo y aplicando las mejores prácticas de desarrollo. Me apasiona
          enfrentar nuevos retos, aprender constantemente y compartir
          conocimientos con la comunidad.
        </Typography>
        <Typography>
          Mis principales habilidades están en frontend, desarrollando
          aplicaciones escalables y optimizadas con React, Next.js y Angular.
        </Typography>
        <Typography>
          También cuento con experiencia en backend con Node.js y NestJS, además
          de integrar inteligencia artificial para potenciar soluciones
          innovadoras. Siempre busco mejorar la experiencia del usuario,
          optimizar el rendimiento de las aplicaciones y trabajar con
          arquitecturas escalables.
        </Typography>
        <Typography>
          Mi objetivo es seguir creciendo como profesional, aportando valor a
          cada proyecto en el que participo.
        </Typography>
        <Typography className='AboutMe__footer--contact'>
          Si quieres platicar un poco
          {' '}
          <Link href='#Contact' color='white' title='Ponte en contacto conmigo'>
            contactame.
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutMe;
