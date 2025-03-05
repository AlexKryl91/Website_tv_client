'use client';

import { useState, useEffect } from 'react';
import classes from './SplashScreen.module.scss';
import LogoIcon from '@img/logo_small.svg';

export default function SplashScreen() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    loading && (
      <div className={classes.container}>
        <LogoIcon className={classes.logo} />
        <div className={classes.loader}></div>
      </div>
    )
  );
}
