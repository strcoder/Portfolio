import React from 'react';
import ReactDOM from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import { useStateValue } from '../../context';
import './modal.scss';

const Modal = ({ children, isOpen, onClosed }) => {
  const { theme } = useStateValue();
  if (!isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className='Modal'>
      <div className={`Modal__container ${theme}`}>
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
