import Image from 'next/image';
import classes from './SplashScreen.module.scss';

export default function SplashScreen() {
  return (
    <div className={classes.container}>
      <Image
        src="/img/logo_small.svg"
        width={150}
        height={150}
        alt="logo"
        className={classes.logo}
      />
      <div className={classes.loader}></div>
    </div>
  );
}
