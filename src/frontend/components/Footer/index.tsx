import React from 'react';
import { Box, Typography } from 'eduli-ui';
import './Footer.scss';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box component='footer' className='Footer' bgColor='primary'>
      <Box className='Footer__copyright' display='flex'>
        <Typography color='text-contrast'>
          &copy; Antonio Guzman -
          {' '}
          {year}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
