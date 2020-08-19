import React from 'react';
import Project from '../Project/Project';
import './projectList.scss';

const ProjectList = () => {
  return (
    <section className='ProjectList'>
      <h2>{'<Portfolio>'}</h2>
      <div className='ProjectList__elements'>
        {[1, 2, 3].map((item) => (
          <React.Fragment key={item}>
            <Project />
          </React.Fragment>
        ))}
      </div>
      <h2>{'</Portfolio>'}</h2>
    </section>
  );
};

export default ProjectList;
