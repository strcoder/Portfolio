import React from 'react';
import { SiPlatzi } from 'react-icons/si';
import './MoreAboutMe.scss';
import { Box, Link, Typography } from 'eduli-ui';
import { FaUserAstronaut } from 'react-icons/fa';

export const MoreAboutMe = () => {
  return (
    <Box component='section' className='MoreAboutMe' id='More'>
      <Typography component='h3' variant='h4'>
        <Typography component='span'>
          <FaUserAstronaut />
        </Typography>
        Sobre mí
      </Typography>
      <Box>
        <Typography>
          En 2021 me inscribi a un concurso en platzi para crear una plataforma
          de e-commerce en tiempo record, el proyecto realizado fue Foody+ en
          ese proyecto yo realice la lógica del frontend y colabore
          conjuntamente con un personas extraordinarias de diferentes países.
        </Typography>
        <Link
          target='_blank'
          rel='noreferrer'
          title='Visitar platzi olimpiadas'
          color='accent'
          href='https://platzi.com/blog/olimpiadas-premiacion-olympia-challenge/'
        >
          <SiPlatzi size={16} />
          <Typography component='span'>Ver página del reto</Typography>
        </Link>
      </Box>
      <Box>
        <Typography>
          Actualmente me encuentro desarrollando mi carrera ingeniería en
          computación en la UAM-C, y lo complemento estudiando de manera
          autodidacta y a la vez con cursos en línea dentro de la plataforma
          educativa plazi la cual me ha fomentado la idea de nunca parar de
          aprender y seguir creciendo como persona
        </Typography>
        <Link
          rel='noreferrer'
          target='_blank'
          title='Visitar mi perfil de platzi'
          href='https://platzi.com/p/agvcoder/'
          color='accent'
        >
          <SiPlatzi size={16} />
          <Typography component='span'>Perfil de platzi</Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default MoreAboutMe;
