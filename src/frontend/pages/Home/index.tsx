import React from 'react';
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
      <PageNav />
      <Hero />
      <AboutMe />
      <Skills />
      <ProjectList />
      <MoreAboutMe />
      <Contact />
    </>
  );
};

export default HomePage;
