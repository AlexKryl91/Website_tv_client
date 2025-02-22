'use client';

import { RefObject, useEffect, useState } from 'react';
import classes from './AnimatedBar.module.scss';
import useItersection from '@/hooks/useIntersection';

type TBar = {
  children?: React.ReactNode;
  addSpacer?: boolean;
};

export const AnimatedBar = ({ children, addSpacer = false }: TBar) => {
  const [ref, isIntersecting] = useItersection(0);

  const styleBarBtn = `${classes['bar-btn']} ${
    addSpacer ? classes.spacer : ''
  }`;
  const styleType = children ? styleBarBtn : classes.bar;
  const styleBar = `${styleType} ${isIntersecting ? classes.active : ''}`;

  return (
    <div ref={ref as RefObject<HTMLDivElement>} className={styleBar}>
      <div className={classes['stripe-s']}></div>
      <div className={classes['stripe-m']}></div>
      <div className={classes['stripe-l']}></div>
      <div className={classes['stripe-xl']}>{children}</div>
    </div>
  );
};

type TBarBtn = {
  parentRef: RefObject<HTMLDetailsElement | null>;
  btnLabels: {
    open: string;
    close: string;
  };
  addSpacer?: boolean;
};

export const AnimatedBarButton = ({
  parentRef,
  btnLabels,
  addSpacer,
}: TBarBtn) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const config = {
    attributes: true,
    attributeFilter: ['open'],
  };

  useEffect(() => {
    const mutObserver = new MutationObserver(() => {
      setIsOpen((val) => !val);
    });
    mutObserver.observe(parentRef.current as Element, config);

    return () => {
      mutObserver.disconnect();
    };
  });

  const styleBtn = `${classes.button} ${isOpen ? classes.open : ''}`;

  function openHandler() {
    parentRef.current?.toggleAttribute('open');
  }

  return (
    <AnimatedBar addSpacer={addSpacer}>
      <button onClick={openHandler} className={styleBtn} type="button">
        {btnLabels[isOpen ? 'close' : 'open']}
      </button>
    </AnimatedBar>
  );
};
