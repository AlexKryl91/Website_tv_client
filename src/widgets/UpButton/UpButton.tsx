'use client';

import { useEffect, useState } from 'react';
import classes from './UpButton.module.scss';
import Arrow from '@icons/arrow.svg';

const UpButton = () => {
  const [isVisible, setVisible] = useState<boolean>(false);

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
      type="button"
      className={style}
    >
      <Arrow className={classes.arrow} />
    </button>
  );
};

export default UpButton;
