import React from 'react';
import ProjectMin from '../ProjectMin/ProjectMin';
import './projectMinList.scss';
import Pagination from '../Pagination/Pagination';

const ProjectMinList = () => {
  return (
    <>
      <section className='ProjectMinList'>
        {[1, 2, 3, 4, 5].map((project) => (
          <React.Fragment key={project}>
            <ProjectMin />
          </React.Fragment>
        ))}
      </section>
      <Pagination />
    </>
  );
};

export default ProjectMinList;
