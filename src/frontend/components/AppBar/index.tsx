import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiCoffee } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { PayPalButton } from 'react-paypal-button-v2';
import { RiSunLine, RiMoonClearLine } from 'react-icons/ri';
import Modal from '../Modal';
import setTheme from '../../context/actions';
import { useStateValue } from '../../context';
import './appBar.scss';

const AppBar = () => {
  const [amount, setAmount] = useState(5);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { theme, dispatch, paypal } = useStateValue();
  const [finishModal, setFinishModal] = useState(false);
  const newTheme = theme === 'light' ? 'dark' : 'light';

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
    <header className={`AppBar ${theme}`}>
      <div className='AppBar__header'>
        <Link to='/' className='AppBar__header--logo'>
          <picture>
            <source
              media='(min-width: 375px)'
              srcSet='/images/logo-ant.png'
            />
            <img src='/images/logo-min.png' alt='Logo' width='100' height='40' />
          </picture>
        </Link>
      </div>

      <div className='AppBar__body'>
        {/* <button
          type='button'
          title='Cambiar tema'
          className='btn-link-soft'
          onClick={() => setTheme({ theme: newTheme, dispatch })}
        >
          {theme === 'light' ? <RiSunLine /> : <RiMoonClearLine />}
        </button>
        <button
          type='button'
          title='Proximamente'
          className='btn-soft'
          onClick={() => setOpenModal(true)}
        >
          <span><FiCoffee /></span>
          <span>Buy me a coffee</span>
        </button> */}
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
    </header>
  );
};

export default AppBar;
