import React from 'react';
import { VscLoading } from 'react-icons/vsc';
import Modal from '../Modal';
import './messageModal.scss';

const MessageModal = ({ isOpen, onClosed, isLoading, isError }) => {
  return (
    <Modal isOpen={isOpen} onClosed={onClosed}>
      <div className='MessageModal'>
        {isLoading && (
          <>
            <span className='MessageModal--loader'><VscLoading size={100} /></span>
            <span>Enviando mensaje</span>
          </>
        )}
        {!isLoading && !isError && (
          <>
            <h1>¡Gracias por tu mensaje!</h1>
            <p>En breve me pondre en contacto contigo</p>
            <button type='button' className='btn' onClick={onClosed}>Aceptar</button>
          </>
        )}
        {isError && (
          <>
            <h1 className='text-danger'>¡Error al enviar mensaje!</h1>
            <p>Intentar nuevamente</p>
            <button type='button' className='btn' onClick={onClosed}>Aceptar</button>
          </>
        )}
      </div>
    </Modal>
  );
};

export default MessageModal;
