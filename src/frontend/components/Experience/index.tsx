import React, { useState } from 'react';
import { Box, Button, Typography } from 'eduli-ui';
import { LiaSpaceShuttleSolid } from 'react-icons/lia';
import { useStateValue } from '../../context';
import './Experience.scss';

type JobKey = 'aeromexico' | 'cumplo' | 'bbva';

const Experience = () => {
  const { t } = useStateValue();
  const [showMoreInfo, setShowMoreInfo] = useState<JobKey | ''>('');

  const handleShowMoreInfo = (info: JobKey | '') => {
    setShowMoreInfo((prev) => (prev === info ? '' : info));
  };

  const jobs: JobKey[] = ['aeromexico', 'cumplo', 'bbva'];

  const renderJobDetail = (jobKey: JobKey) => {
    const job = t.experience.jobs[jobKey];
    return (
      <Box className='Experience__timeline--item' key={jobKey}>
        <Typography variant='h5' className='color-accent'>
          {job.company}
        </Typography>
        <Typography variant='h6'>{job.role}</Typography>
        <Typography variant='caption'>
          {job.period}
          {jobKey === 'aeromexico' ? ` - ${t.experience.current}` : ''}
        </Typography>
        <Box className='Experience__timeline--item--description'>
          <Typography variant='body2'>
            <Typography component='strong'>
              💡 {t.experience.role}:{' '}
            </Typography>
            {job.description}
          </Typography>
          <Typography variant='body2'>
            <Typography component='strong'>🌎 {t.experience.impact}: </Typography>
            <ul className='Experience__bullets'>
              {job.bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          </Typography>
        </Box>
        <Button
          variant='text'
          color='accent'
          onClick={() => handleShowMoreInfo('')}
        >
          {t.experience.showLess}
        </Button>
      </Box>
    );
  };

  const renderJobPreview = (jobKey: JobKey) => {
    const job = t.experience.jobs[jobKey];
    return (
      <Button
        className='Experience__timeline--item'
        custom
        onClick={() => handleShowMoreInfo(jobKey)}
        key={jobKey}
      >
        <Typography variant='h5' className='color-accent'>
          {job.company}
        </Typography>
        <Typography variant='h6'>{job.role}</Typography>
        <Typography variant='caption'>
          {job.period}
          {jobKey === 'aeromexico' ? ` - ${t.experience.current}` : ''}
        </Typography>
      </Button>
    );
  };

  return (
    <Box>
      <Box component='section' className='Experience' id='Experience'>
        <Box className='Experience__header'>
          <Typography component='h3' variant='h4'>
            <Typography component='span'>
              <LiaSpaceShuttleSolid />
            </Typography>
            {t.experience.title}
          </Typography>
          <Typography>{t.experience.subtitle}</Typography>
        </Box>
        <Box className='Experience__timeline'>
          <Box className={`lines ${showMoreInfo ? 'lines--active' : ''}`}>
            <Box className='dot' />
            <Box className='line' />
            {!showMoreInfo && (
              <>
                <Box className='dot' />
                <Box className='line' />
                <Box className='dot' />
                <Box className='line' />
              </>
            )}
          </Box>
          {showMoreInfo && renderJobDetail(showMoreInfo)}
          {!showMoreInfo && (
            <Box className='Experience__timeline--container'>
              {jobs.map(renderJobPreview)}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Experience;
