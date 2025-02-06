'use client';

import { RefObject } from 'react';
import classes from './AnimatedBar.module.scss';
import useItersection from '@/hooks/useIntersection';

const AnimatedBar = () => {
  const [ref, isIntersecting] = useItersection(0);

  const style = `${classes.bar} ${isIntersecting ? classes.active : ''}`;

  return (
    <div ref={ref as RefObject<HTMLDivElement>} className={style}>
      <div className={classes['stripe-s']}></div>
      <div className={classes['stripe-m']}></div>
      <div className={classes['stripe-l']}></div>
      <div className={classes['stripe-xl']}></div>
    </div>
  );
};

export default AnimatedBar;
