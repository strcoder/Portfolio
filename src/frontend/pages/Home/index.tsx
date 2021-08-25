import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../../components/Hero';
import AboutMe from '../../components/AboutMe';
import PageNav from '../../components/PageNav';
import Skills from '../../components/Skills';
import ProjectList from '../../components/ProjectList';
import MoreAboutMe from '../../components/MoreAboutMe';
import Contact from '../../components/Contact';
import './home.scss';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Inicio | Antonio Guzmán</title>
        <meta name='description' content='Antonio Guzmán Vilchis, desarrollador web con conocimientos en React, Typescript, NodeJS y mucho más.' />
      </Helmet>
      <PageNav />
      {/* <Hero /> */}
      <AboutMe />
      <Skills />
      <ProjectList />
      <MoreAboutMe />
      <Contact />
    </>
  );
};

export default HomePage;
