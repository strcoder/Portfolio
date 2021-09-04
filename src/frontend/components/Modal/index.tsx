import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import { useStateValue } from '../../context';
import './styles.scss';

type ModalProps = {
  show: boolean,
  title: string,
  onClose: Function,
  children: React.ReactElement,
}

const Modal = ({ show, onClose, children, title }: ModalProps) => {
  const { theme } = useStateValue();
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
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
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal'),
    );
  }
  return null;
};

export default Modal;
