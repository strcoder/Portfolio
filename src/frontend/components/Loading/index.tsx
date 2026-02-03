import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import './loading.scss';

interface LoadingProps {
  message?: string;
  size?: 'small' | 'medium' | 'large';
}

const Loading = ({ message = 'Cargando...', size = 'medium' }: LoadingProps) => {
  const sizeClass = {
    small: 16,
    medium: 24,
    large: 40,
  };

  return (
    <div className={`Loading Loading--${size}`}>
      <FaSpinner className='Loading__spinner' size={sizeClass[size]} />
      {message && <p className='Loading__message'>{message}</p>}
    </div>
  );
};

export default Loading;
