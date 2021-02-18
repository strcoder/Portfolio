import React from 'react';
import { VscLoading } from 'react-icons/vsc';
import Modal from '../Modal';
import './emailModal.scss';

const EmailModal = ({ isOpen, onClosed, isLoading, isError }) => {
  return (
    <Modal isOpen={isOpen} onClosed={onClosed}>
      <div className='EmailModal'>
        {isLoading && (
          <>
            <span className='EmailModal--loader'><VscLoading size={100} /></span>
            <span>Enviando tu correo</span>
          </>
        )}
        {!isLoading && !isError && (
          <>
            <h1>¡Gracias por dejarme tu correo!</h1>
            <p>En breve me pondre en contacto contigo</p>
            <button type='button' className='btn' onClick={onClosed}>Aceptar</button>
          </>
        )}
        {isError && (
          <>
            <h1 className='text-danger'>¡Error al enviar correo!</h1>
            <p>Intentar nuevamente</p>
            <button type='button' className='btn' onClick={onClosed}>Aceptar</button>
          </>
        )}
      </div>
    </Modal>
  );
};

export default EmailModal;
