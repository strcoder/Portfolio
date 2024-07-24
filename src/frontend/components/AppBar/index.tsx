import React from 'react';
import { Link } from 'react-router-dom';
import { Box, IconButton, Image, useTheme } from 'eduli-ui';
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri';

import './appBar.scss';

export function AppBar() {
  const { theme, switchTheme } = useTheme();

  return (
    <Box
      component='header'
      className='AppBar'
      display='flex'
      bgColor='primary'
    >
      <Box
        className='AppBar__header'
        display='flex'
      >
        <Link to='/' className='AppBar__header--logo'>
          <Image
            component='picture'
            sources={[
              {
                media: '(min-width: 375px)',
                srcSet: '/images/logo-ant.png',
              },
              {
                srcSet: '/images/logo-min.png',
              },
            ]}
            src='/images/logo-ant.png'
            alt='Logo'
          />
        </Link>
      </Box>

      <Box className='AppBar__body' display='flex'>
        <IconButton
          title='Cambiar tema'
          color='text'
          // className='btn-link-soft'
          onClick={() => switchTheme()}
        >
          {theme === 'light' ? <RiSunLine /> : <RiMoonClearLine />}
        </IconButton>
      </Box>
    </Box>
  );
}

export default AppBar;
