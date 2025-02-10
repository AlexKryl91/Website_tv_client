import classes from './Footer.module.scss';
import getLocale from '@utils/getLocale';
import { TComponentProps, TNavigationJSON } from '@/types/types';
import Address from './Address';
import Navigation from './Navigation';
import Credits from './Credits';

const Footer = async ({ lang }: TComponentProps) => {
  const t = (await getLocale('navigation', lang)) as TNavigationJSON;

  return (
    <footer className={classes.footer}>
      <div className={classes.info}>
        <Address lang={lang} text={t}></Address>
        <Navigation lang={lang} text={t}></Navigation>
      </div>
      <Credits text={t}></Credits>
    </footer>
  );
};

export default Footer;
