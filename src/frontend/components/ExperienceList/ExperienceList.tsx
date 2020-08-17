import React from 'react';
import './experienceList.scss';
import Experience from '../Experience/Experience';

const ExperienceList = () => {
  return (
    <div className='ExperienceList'>
      {[1, 2, 3, 4, 5].map((item) => (
        <React.Fragment key={item}>
          <Experience />
        </React.Fragment>
      ))}
    </div>
  );
};

export default ExperienceList;
