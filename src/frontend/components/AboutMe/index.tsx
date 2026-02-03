import React from 'react';
import { Box, Link, Typography } from 'eduli-ui';
import { MdLocationOn, MdPublic } from 'react-icons/md';
import { useStateValue } from '../../context';
import './AboutMe.scss';

const AboutMe = () => {
  const { t } = useStateValue();

  return (
    <Box component='section' id='AboutMe' className='AboutMe'>
      <Typography component='h3' variant='h3'>
        {t.aboutMe.title}
      </Typography>
      <Box className='AboutMe__body' display='grid' gap='sm'>
        <Typography className='AboutMe__intro'>
          {t.aboutMe.intro}
        </Typography>
        <Typography>
          {t.aboutMe.paragraph1}
        </Typography>
        <Typography>
          {t.aboutMe.paragraph2}
        </Typography>
        <Box className='AboutMe__badges'>
          <Typography className='AboutMe__badge AboutMe__badge--remote'>
            <MdPublic />
            {t.aboutMe.availableRemote}
          </Typography>
          <Typography className='AboutMe__badge AboutMe__badge--location'>
            <MdLocationOn />
            {t.aboutMe.location}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
