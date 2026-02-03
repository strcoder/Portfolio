import React from 'react';
import { Box, Typography } from 'eduli-ui';
import { MdLanguage } from 'react-icons/md';
import { useStateValue } from '../../context';
import './Footer.scss';

export const Footer = () => {
  const year = new Date().getFullYear();
  const { t, language, toggleLanguage } = useStateValue();

  return (
    <Box component='footer' className='Footer' bgColor='primary'>
      <Box className='Footer__content'>
        <Box className='Footer__copyright' display='flex'>
          <Typography color='text-contrast'>
            {t.footer.copyright} - {year}
          </Typography>
        </Box>
        <button
          type='button'
          onClick={toggleLanguage}
          className='Footer__language-btn'
        >
          <MdLanguage />
          <span>{language === 'es' ? 'English' : 'Español'}</span>
        </button>
      </Box>
    </Box>
  );
};

export default Footer;
