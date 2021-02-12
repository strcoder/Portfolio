import React from 'react';
import ProjectCard from '../ProjectCard';
import './projectList.scss';

const ProjectList = () => {
  return (
    <section className='Projects' id='Projects'>
      <h2>Projects</h2>
      <div className='Projects__body'>
        <ProjectCard
          logo='/images/eduli.png'
          title='Eduli'
          headerImage='https://images.pexels.com/photos/4769486/pexels-photo-4769486.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          bgColor='primary'
        />
        <ProjectCard
          logo='/images/democars.png'
          title='Democars'
          headerImage='https://images.pexels.com/photos/5733730/pexels-photo-5733730.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          bgColor='danger'
        />
        <ProjectCard
          logo='/images/armando-codigo.jpeg'
          title='Armando codigo (Patreon)'
          headerImage='https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          bgColor='twitch'
        />
      </div>
    </section>
  );
};

export default ProjectList;
