import React from 'react';
import { SiPlatzi } from 'react-icons/si';
import { Box, Link, Typography } from 'eduli-ui';
import { FaUserAstronaut } from 'react-icons/fa';
import { useStateValue } from '../../context';
import './MoreAboutMe.scss';

export const MoreAboutMe = () => {
  const { t } = useStateValue();

  return (
    <Box component='section' className='MoreAboutMe' id='More'>
      <Typography component='h3' variant='h4'>
        <Typography component='span'>
          <FaUserAstronaut />
        </Typography>
        {t.moreAboutMe.title}
      </Typography>
      <Box>
        <Typography>
          {t.moreAboutMe.platziChallenge}
        </Typography>
        <Link
          target='_blank'
          rel='noreferrer'
          title={t.moreAboutMe.viewChallenge}
          color='accent'
          href='https://platzi.com/blog/olimpiadas-premiacion-olympia-challenge/'
        >
          <SiPlatzi size={16} />
          <Typography component='span'>{t.moreAboutMe.viewChallenge}</Typography>
        </Link>
      </Box>
      <Box>
        <Typography>
          {t.moreAboutMe.education}
        </Typography>
        <Link
          rel='noreferrer'
          target='_blank'
          title={t.moreAboutMe.platziProfile}
          href='https://platzi.com/p/agvcoder/'
          color='accent'
        >
          <SiPlatzi size={16} />
          <Typography component='span'>{t.moreAboutMe.platziProfile}</Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default MoreAboutMe;
