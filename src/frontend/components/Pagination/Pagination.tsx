import React from 'react';
import './pagination.scss';

const Pagination = () => {
  return (
    <div className='Pagination'>
      <button type='button'>
        <i className='fas fa-angle-left' />
      </button>
      <div className='Pagination__body'>
        <button type='button'>1</button>
        <button type='button'>2</button>
        <button type='button'>3</button>
        <button type='button'>4</button>
        <button type='button'>5</button>
      </div>
      <button type='button'>
        <i className='fas fa-angle-right' />
      </button>
    </div>
  );
};

export default Pagination;
