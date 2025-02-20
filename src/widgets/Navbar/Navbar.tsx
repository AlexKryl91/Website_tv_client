import Link from 'next/link';
import Image from 'next/image';
import classes from './Navbar.module.scss';
import getLocale from '@utils/getLocale';
import { TComponentProps, TNavigationJSON } from '@/types/types';
import NavMenu from './NavMenu/NavMenu';
import Actions from './Actions/Actions';

const Navbar = async ({ lang }: TComponentProps) => {
  const t = (await getLocale('navigation', lang)) as TNavigationJSON;

  return (
    <header className={classes.navbar}>
      <Link
        href={`/${lang}`}
        title={t.logo.aria_label}
        aria-label={t.logo.aria_label}
      >
        <Image
          className={classes.logo}
          src={`/img/logo_large_${lang}.svg`}
          alt={t.logo.alt}
          width={265}
          height={32}
          priority
        />
      </Link>
      <NavMenu lang={lang} content={t} />
      <Actions lang={lang} content={t} />
    </header>
  );
};

export default Navbar;
