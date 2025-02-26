'use client';

import { useEffect, useState } from 'react';
import classes from './UpButton.module.scss';
import Arrow from '@icons/arrow.svg';
import { useAppSelector } from '@store/hooks';

const LOCALES = { ru: 'В начало страницы', en: 'To the top of the page' };

const UpButton = () => {
  const [isVisible, setVisible] = useState<boolean>(false);

  const lang = useAppSelector((state) => state.lang.lang);

  const scrollHandler = () => setVisible(window.scrollY >= 800);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const style = `${classes['up-btn']} ${isVisible ? classes.visible : ''}`;

  return (
    <button
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      className={style}
      type="button"
      title={LOCALES[lang]}
    >
      <Arrow className={classes.arrow} />
    </button>
  );
};

export default UpButton;
