import React, { useState } from 'react';
import { FiCoffee } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { PayPalButton } from 'react-paypal-button-v2';
import Modal from '../Modal';
import { useStateValue } from '../../context';
import './footer.scss';

const Footer = () => {
  const [amount, setAmount] = useState(5);
  const { theme, paypal } = useStateValue();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [finishModal, setFinishModal] = useState(false);

  const paypalOptions = {
    clientId: paypal,
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePayment = ({ details, data }) => {
    setOpenModal(false);
    setFinishModal(true);
    if (data?.status === 'COMPLETED') {
      setError(false);
      setSuccess(true);
      return;
    }
    setError(true);
    setSuccess(false);
  };

  return (
    <footer className={`Footer ${theme}`}>
      <div className={`Footer__copyright ${theme}`}>
        <p>&copy; Antonio Guzman - 2021</p>
        <a
          target='_blank'
          rel='noreferrer'
          className='btn-link-soft'
          href='/pdf/CV-Antonio-es.pdf'
        >
          Curriculum
        </a>
        <button
          type='button'
          className='btn-link-soft'
          onClick={() => setOpenModal(true)}
        >
          Buy me a coffee
        </button>
      </div>
      <Modal
        show={openModal}
        onClose={setOpenModal}
        title='Buy me a coffee'
      >
        <>
          <p><strong>Que genial que quieras apoyarme, ¡Muchas gracias!</strong></p>
          <p><strong>{`Total: $${amount} USD`}</strong></p>
          <div className='CoffeModal__items flex'>
            <button
              type='button'
              onClick={() => setAmount(5)}
              className={
                amount === 5 ?
                  theme === 'light' ? 'btn-primary' : 'btn-tertiary' :
                  theme === 'light' ? 'btn-white' : 'btn-black'
              }
            >
              <span>1</span>
              <span className='btn-icon'><FiCoffee /></span>
            </button>
            <button
              type='button'
              onClick={() => setAmount(25)}
              className={
                amount === 25 ?
                  theme === 'light' ? 'btn-primary' : 'btn-tertiary' :
                  theme === 'light' ? 'btn-white' : 'btn-black'
              }
            >
              <span>5</span>
              <span className='btn-icon'><FiCoffee /></span>
            </button>
            <button
              type='button'
              onClick={() => setAmount(50)}
              className={
                amount === 50 ?
                  theme === 'light' ? 'btn-primary' : 'btn-tertiary' :
                  theme === 'light' ? 'btn-white' : 'btn-black'
              }
            >
              <span>10</span>
              <span className='btn-icon'><FiCoffee /></span>
            </button>
          </div>
          <PayPalButton
            amount={amount}
            style={buttonStyles}
            options={paypalOptions}
            onSuccess={(details, data) => {
              handlePayment({ details, data });
            }}
            onError={(err) => {
              console.log(err);
            }}
          />
        </>
      </Modal>
      <Modal
        show={finishModal}
        onClose={setFinishModal}
        title={success ? 'Completado' : '¡Error!'}
      >
        <div className='CoffeModal__finish'>
          {success && (
            <>
              <p>
                <strong>¡Muchas gracias!</strong>
                <span><AiOutlineHeart /></span>
              </p>
              <p>Se completo con exito la compra, gracias a ti este mes si podre comer</p>
              <button
                type='button'
                className='form-button btn-primary'
                onClick={() => setFinishModal(false)}
              >
                Continuar
              </button>
            </>
          )}
          {error && (
            <>
              <p className='text-danger'><strong>¡Ha ocurrido un error!</strong></p>
              <p>Lamentablemete la compra no se completo pero no te preocupes lo puedes intentar nuevamente en unos cuantos minutos</p>
              <button
                type='button'
                className='form-button btn-primary'
                onClick={() => setFinishModal(false)}
              >
                Continuar
              </button>
            </>
          )}
        </div>
      </Modal>
    </footer>
  );
};

export default Footer;
