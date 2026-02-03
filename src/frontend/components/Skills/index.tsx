import React from 'react';
import { PiPlanet } from 'react-icons/pi';
import { Box, Typography } from 'eduli-ui';
import { useStateValue } from '../../context';
import './skills.scss';

const Skills = () => {
  const { t } = useStateValue();

  const categories = [
    { key: 'frontend' as const, icon: '💻' },
    { key: 'aiml' as const, icon: '🤖' },
    { key: 'backend' as const, icon: '⚙️' },
    { key: 'mobile' as const, icon: '📱' },
  ];

  return (
    <Box component='section' className='Skills' id='Skills'>
      <Typography component='h3' variant='h4'>
        <Typography component='span'>
          <PiPlanet />
        </Typography>
        {t.skills.title}
      </Typography>
      <Box className='Skills__body'>
        <Typography>{t.skills.subtitle}</Typography>
      </Box>
      <Box className='Skills__categories'>
        {categories.map(({ key, icon }) => (
          <Box key={key} className='Skills__category'>
            <Typography variant='h6' className='Skills__category-title'>
              {icon} {t.skills.categories[key].title}
            </Typography>
            <ul className='Skills__category-list'>
              {t.skills.categories[key].items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
