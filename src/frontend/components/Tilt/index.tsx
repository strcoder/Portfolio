import React from 'react';
import './tilt.scss';

const Tilt = ({ color, bottom }: { color:string, bottom?: string }) => {
  return (
    <div className={`custom-shape-divider-top-1612903874 ${bottom || ''}`}>
      <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
        <path d='M1200 120L0 16.48 0 0 1200 0 1200 120z' className={`shape-fill ${color}`} />
      </svg>
    </div>
  );
};

export default Tilt;
