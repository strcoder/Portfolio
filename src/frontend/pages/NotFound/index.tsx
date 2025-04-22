import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link, Typography } from 'eduli-ui';
import './NotFound.scss';

const NotFound = () => {
  return (
    <Box className='NotFound' display='grid'>
      <Typography variant='h1' color='text-contrast'>
        404
      </Typography>
      <Typography variant='h6' color='text-contrast'>
        Parece que la pagina que buscas no existe
      </Typography>
      <Link component={RouterLink} size='large' to='/' className='btn' title='Regreasar al inicio'>Ir al inicio</Link>
    </Box>
  );
};

export default NotFound;
