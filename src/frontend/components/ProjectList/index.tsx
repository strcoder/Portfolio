import React from 'react';
import { useStateValue } from '../../context';
import ProjectCard from '../ProjectCard';
import './projectList.scss';

const ProjectList = () => {
  const { projects } = useStateValue();
  return (
    <section className='Projects' id='Projects'>
      <div className='Projects__body'>
        <h2>Projects</h2>
        {!projects && (
          <h1>Loading...</h1>
        )}
        {projects?.map((project: any) => (
          <React.Fragment key={project._id}>
            <ProjectCard
              url={project.url}
              date={project.startDate}
              logo='/images/eduli.png'
              tags={project.tags}
              title={project.name}
              github={project.github}
              bgColor='primary'
              headerImage='https://images.pexels.com/photos/4769486/pexels-photo-4769486.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              description={project.description}
              // logo='/images/eduli.png'
              // title={project.name}
              // headerImage='https://images.pexels.com/photos/4769486/pexels-photo-4769486.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
              // bgColor='primary'
            />
          </React.Fragment>
        ))}
        {/* <ProjectCard
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
        /> */}
      </div>
    </section>
  );
};

export default ProjectList;
