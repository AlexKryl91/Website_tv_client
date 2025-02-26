import classes from './Footer.module.scss';
import getTranslation from '@/utils/getTranslation';
import { TComponentProps, TNavigationJSON } from '@/types/types';
import Address from './Address';
import Navigation from './Navigation';
import Credits from './Credits';

const Footer = async ({ lang }: TComponentProps) => {
  const t = (await getTranslation('navigation', lang)) as TNavigationJSON;

  return (
    <footer className={classes.footer}>
      <div className={classes.info}>
        <Address lang={lang} content={t}></Address>
        <Navigation lang={lang} content={t}></Navigation>
      </div>
      <Credits content={t}></Credits>
    </footer>
  );
};

export default Footer;
