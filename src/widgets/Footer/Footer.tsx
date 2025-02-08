import classes from './Footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import getLocale from '@utils/getLocale';
import { TComponentProps, TNavigationJSON } from '@/types/types';

const Footer = async ({ lang }: TComponentProps) => {
  const t = (await getLocale('navigation', lang)) as TNavigationJSON;

  return (
    <footer className={classes.footer}>
      <Link href={`/${lang}`} className={classes.logo} title={t.logo.alt}>
        <Image
          src={`img/logo_large_${lang}.svg`}
          alt={t.logo.alt}
          width={265}
          height={32}
          priority
        />
      </Link>
      <div className={classes.stripe}></div>
      <div className={classes.corner}></div>
    </footer>
  );
};

export default Footer;
