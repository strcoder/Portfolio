import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Image, Link } from 'eduli-ui';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { useStateValue } from '../../context';
import './AppBar.scss';

export const AppBar = () => {
  const { t } = useStateValue();

  return (
    <Box component='header' className='AppBar' display='flex' bgColor='primary'>
      <Box className='AppBar__header'>
        <Link to='/' className='AppBar__header--logo' component={RouterLink}>
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

      <Box component='nav'>
        <Link
          target='_blank'
          rel='noreferrer'
          href='https://github.com/strcoder'
          color='white'
          title={t.nav.visitGithub}
        >
          <FaGithub />
        </Link>
        <Link
          target='_blank'
          rel='noreferrer'
          href='https://www.linkedin.com/in/agvcoder/'
          color='white'
          title={t.nav.visitLinkedin}
        >
          <FaLinkedinIn />
        </Link>
      </Box>
    </Box>
  );
};

export default AppBar;
