import React from 'react';
import { useStateValue } from '../../Context';
import './heroMin.scss';

const HeroMin = () => {
  const { theme } = useStateValue();
  return (
    <section className={`HeroMin ${theme}`}>
      <h1>Portolio</h1>
    </section>
  );
};

export default HeroMin;
