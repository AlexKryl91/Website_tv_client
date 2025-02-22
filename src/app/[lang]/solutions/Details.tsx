'use client';

import { useEffect, useRef } from 'react';
import classes from './Details.module.scss';
import { AnimatedBarButton } from '@/components/AnimatedBar/AnimatedBar';

type TDetails = {
  children: React.ReactNode;
  btnLabels?: {
    open: string;
    close: string;
  };
};

export const Details = ({ children, btnLabels }: TDetails) => {
  const detailsRef = useRef<HTMLDetailsElement | null>(null);

  const config = {
    attributes: true,
    attributeFilter: ['open'],
  };

  useEffect(() => {
    const mutObserver = new MutationObserver(mutHandler);
    mutObserver.observe(detailsRef.current as Element, config);

    return () => {
      mutObserver.disconnect();
    };
  });

  function mutHandler() {
    const ref = detailsRef.current as HTMLDetailsElement;
    ref.childNodes.forEach((node) => {
      if (node.nodeName === 'DETAILS') {
        const details = node as HTMLDetailsElement;
        details.open = false;
      }
    });
  }

  return (
    <details name="system" className={classes.details} ref={detailsRef}>
      {children}
      {btnLabels && (
        <AnimatedBarButton parentRef={detailsRef} btnLabels={btnLabels} />
      )}
    </details>
  );
};

export const SubDetails = ({ children, btnLabels }: Required<TDetails>) => {
  const detailsRef = useRef(null);

  const style = `${classes.details} ${classes['sub-details']}`;

  return (
    <>
      <details name="sub-system" className={style} ref={detailsRef}>
        {children}
      </details>
      <AnimatedBarButton
        parentRef={detailsRef}
        btnLabels={btnLabels}
        addSpacer={true}
      />
    </>
  );
};
