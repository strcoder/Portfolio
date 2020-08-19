import React from 'react';
import Hero from '../components/Hero/Hero';
import AboutMe from '../components/AboutMe/AboutMe';
import Project from '../components/Project/Project';
// import Experience from '../components/Experience/Experience';
import ExperienceList from '../components/ExperienceList/ExperienceList';
import Footer from '../components/Footer/Footer';

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Project />
      <ExperienceList />
      <Footer />
    </>
  );
};

export default HomePage;
