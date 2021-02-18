import React from 'react';
import ReactDOM from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import './modal.scss';

const Modal = ({ children, isOpen, onClosed }) => {
  if (!isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className='Modal'>
      <div className='Modal__container'>
        <button type='button' className='btn-outline-danger' onClick={onClosed}>
          <FaTimes />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modal'),
  );
};

export default Modal;
