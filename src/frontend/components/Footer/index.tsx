import React from 'react';
import { useStateValue } from '../../context';
import './footer.scss';
import { Box, Typography } from 'eduli-ui';

const Footer = () => {
  const { theme } = useStateValue();

  return (
    <Box
      component='footer'
      className='Footer'
      bgColor='primary'
    >
      <Box className='Footer__copyright' display='flex'>
        <Typography color='text-contrast'>
          &copy; Antonio Guzman - 2024
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
