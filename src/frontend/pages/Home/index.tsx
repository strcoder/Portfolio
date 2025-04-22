import React from 'react';
import { Helmet } from 'react-helmet';
import AboutMe from '../../components/AboutMe';
import Skills from '../../components/Skills';
import ProjectList from '../../components/ProjectList';
import MoreAboutMe from '../../components/MoreAboutMe';
import Contact from '../../components/Contact';
import Experience from '../../components/Experience';
import './home.scss';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Inicio | Antonio Guzmán</title>
        <meta name='description' content='Antonio Guzmán Vilchis, desarrollador web con conocimientos en React, Typescript, NodeJS y mucho más.' />
      </Helmet>
      <AboutMe />
      <Experience />
      {/* <ProjectList /> */}
      <Skills />
      <MoreAboutMe />
      {/* <Contact /> */}
    </>
  );
};

export default HomePage;
