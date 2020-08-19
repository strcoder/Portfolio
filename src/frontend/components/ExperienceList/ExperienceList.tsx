import React from 'react';
import './experienceList.scss';
import Experience from '../Experience/Experience';

const ExperienceList = () => {
  return (
    <div className='ExperienceList'>
      <h2>{'<Experience>'}</h2>
      <div className='ExperienceList__elements'>
        {[1, 2, 3, 4, 5].map((item) => (
          <React.Fragment key={item}>
            <Experience />
          </React.Fragment>
        ))}
      </div>
      <h2>{'</Experience>'}</h2>
    </div>
  );
};

export default ExperienceList;
