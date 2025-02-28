'use client';

import classes from './Modal.module.scss';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import { closeModal } from '@/store/features/modal/modalSlice';
import { useEffect, useRef } from 'react';
import components from './ComponentsList';

const CLOSE_BTN_TITLES = {
  ru: 'Закрыть',
  en: 'Close',
};

const Modal = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();
  const { lang } = useAppSelector((state) => state.lang);
  const { isOpen, componentName, componentProps } = useAppSelector(
    (state) => state.modal
  );
  const isVisible = isOpen && componentName;

  function exitModal() {
    const modal = ref.current as HTMLDivElement;
    modal.classList.remove(classes.open);
    document?.body.classList.remove('scrollbar--hidden');
    setTimeout(() => {
      dispatch(closeModal());
    }, 400);
  }
  function escHandler(e: KeyboardEvent) {
    if (e.key === 'Escape' && isOpen) {
      exitModal();
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', escHandler);
    if (isVisible) {
      document.body.classList.add('scrollbar--hidden');
      setTimeout(() => {
        const modal = ref.current as HTMLDivElement;
        modal.classList.add(classes.open);
      }, 0);
    }

    return () => {
      window.removeEventListener('keydown', escHandler);
    };
  });

  if (!isVisible) return null;

  const Component = components[componentName as keyof typeof components];
  const props = componentProps as Parameters<typeof Component>[0];

  return (
    <div ref={ref} onClick={exitModal} className={classes.modal}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={classes['modal__content']}
      >
        <button
          onClick={exitModal}
          className={classes['close-btn']}
          type="button"
          title={CLOSE_BTN_TITLES[lang]}
          aria-label={CLOSE_BTN_TITLES[lang]}
        />
        <Component {...props} />
      </div>
    </div>
  );
};

export default Modal;
