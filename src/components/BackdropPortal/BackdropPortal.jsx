import React from 'react';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { Backdrop } from './BackdropPortal.styled';

const modalRoot = document.querySelector('#modal-root');

const BackdropPortal = ({ children, closeModal }) => {
  const body = document.querySelector('body');

  useEffect(() => {
    body.classList.add('no-scroll');

    return () => {
      body.classList.remove('no-scroll');
    };
  }, [body.classList]);

  useEffect(() => {
    const handleEscapePress = event => {
      if (event.code !== 'Escape') return;

      body.classList.remove('no-scroll');
      closeModal();
    };

    window.addEventListener('keydown', handleEscapePress);

    return () => {
      window.removeEventListener('keydown', handleEscapePress);
    };
  }, [body.classList, closeModal]);

  const handleBackdropClick = e => {
    if (e.target !== e.currentTarget) return;

    body.classList.remove('no-scroll');
    closeModal();
  };

  return createPortal(
    <Backdrop id="modal" onClick={handleBackdropClick}>
      {children}
    </Backdrop>,
    modalRoot
  );
};

export default BackdropPortal;
