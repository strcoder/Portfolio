import React from 'react';
import { Helmet } from 'react-helmet';
import AboutMe from '../../components/AboutMe';
import Skills from '../../components/Skills';
import FeaturedProjects from '../../components/FeaturedProjects';
import MoreAboutMe from '../../components/MoreAboutMe';
import Experience from '../../components/Experience';
import { useStateValue } from '../../context';
import './home.scss';

const HomePage = () => {
  const { t, language } = useStateValue();

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{t.seo.title}</title>
        <meta name='description' content={t.seo.description} />
        <meta name='keywords' content={t.seo.keywords} />
        <meta property='og:title' content={t.seo.title} />
        <meta property='og:description' content={t.seo.description} />
        <meta property='og:locale' content={language === 'es' ? 'es_MX' : 'en_US'} />
        <meta name='twitter:title' content={t.seo.title} />
        <meta name='twitter:description' content={t.seo.description} />
      </Helmet>
      <AboutMe />
      <Experience />
      <FeaturedProjects />
      <Skills />
      <MoreAboutMe />
    </>
  );
};

export default HomePage;
