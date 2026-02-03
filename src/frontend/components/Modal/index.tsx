import React from 'react';
import ReactDOM from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import { useStateValue } from '../../context';
import './styles.scss';

type ModalProps = {
  show: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactElement;
};

const Modal = ({ show, onClose, children, title }: ModalProps) => {
  const { theme } = useStateValue();

  const handleCloseClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
  };

  if (!show) return null;

  const modalContent = (
    <section className='Modal'>
      <button
        type='button'
        className='Modal__close'
        onClick={handleCloseClick}
      >
        close
      </button>
      <div className={`ModalWrap ${theme}`}>
        <div className={`ModalWrap__header ${theme}`}>
          {title && (
            <p className='single-line'><strong>{title}</strong></p>
          )}
          <button
            type='button'
            title='Cerrar modal'
            onClick={handleCloseClick}
            className='btn-link-danger'
          >
            <FaTimes size={20} />
          </button>
        </div>
        <main className='ModalWrap__main'>
          {children}
        </main>
      </div>
    </section>
  );

  const modalRoot = document.getElementById('modal');
  if (!modalRoot) return null;

  return ReactDOM.createPortal(modalContent, modalRoot);
};

export default Modal;
