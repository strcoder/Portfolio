import React from 'react';
import { LuConstruction } from 'react-icons/lu';
import './styles.scss';

const InCostruction = () => {
  return (
    <section className='InCostruction'>
      <p className='InCostruction--icon'><LuConstruction /></p>
      <h1>En construcción</h1>
    </section>
  );
};

export default InCostruction;
