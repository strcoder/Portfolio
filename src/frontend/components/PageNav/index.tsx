import React from 'react';
import { FaHome, FaGamepad, FaPaperPlane, FaChartLine, FaVial, FaTeamspeak } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../context';
import './pageNav.scss';

const PageNav = () => {
  const { theme, t } = useStateValue();

  return (
    <aside className={`PageNav ${theme}`}>
      <Link
        to='/'
        title={t.nav.goToHome}
        className='btn-outline-neon'
        onClick={() => window.scroll(0, 0)}
      >
        <FaHome size={25} />
        <span>{t.nav.home}</span>
      </Link>
      <a href='#AboutMe' className='btn-outline-neon' title={t.nav.goToAboutMe}>
        <FaTeamspeak size={25} />
        <span>{t.nav.aboutMe}</span>
      </a>
      <a href='#Skills' className='btn-outline-neon' title={t.nav.goToSkills}>
        <FaChartLine size={25} />
        <span>{t.nav.skills}</span>
      </a>
      <a href='#Projects' className='btn-outline-neon' title={t.nav.goToProjects}>
        <FaVial size={25} />
        <span>{t.nav.projects}</span>
      </a>
      <a href='#More' className='btn-outline-neon' title={t.nav.goToMore}>
        <FaGamepad size={25} />
        <span>{t.nav.more}</span>
      </a>
      <a href='#Contact' className='btn-outline-neon' title={t.nav.goToContact}>
        <FaPaperPlane size={25} />
        <span>{t.nav.contact}</span>
      </a>
    </aside>
  );
};

export default PageNav;
