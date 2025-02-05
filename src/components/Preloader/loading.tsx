import classes from './loading.module.scss';
// import BackgroundSVG from '@/assets/img/service_page_bg.svg';
// import LogoIcon from '@/assets/logos/logo.svg';

export default function Loader() {
  // let isClient = false;
  // if (typeof window !== 'undefined') {
  //   isClient = true;
  // }

  return (
    <>
      <div className={classes.container}>
        {/* <LogoIcon className={classes.logo} /> */}
        {/* <p>{isClient ? 'CSR' : 'SSR'}</p> */}
        <div className={classes.loader}></div>
      </div>
    </>
  );
}
