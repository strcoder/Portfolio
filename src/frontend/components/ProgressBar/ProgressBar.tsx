import React from 'react';
import { useStateValue } from '../../Context';
import './progressBar.scss';

type ProgreassBarProps = {
  title: string,
  percentage: number,
}

const ProgressBar = ({ title, percentage }: ProgreassBarProps) => {
  const { theme } = useStateValue();
  return (
    <figure className={`ProgressBar ${theme}`}>
      <h4 className='ProgressBar--title'>{title}</h4>
      <div className='ProgressBar__loader'>
        <span className={`size-${percentage} ${title.toLowerCase()}`}>{`${percentage}%`}</span>
      </div>
      <span />
    </figure>
  );
};

export default ProgressBar;
