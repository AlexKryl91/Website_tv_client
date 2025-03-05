import Link from 'next/link';
import Image from 'next/image';
import classes from './Navbar.module.scss';
import getTranslation from '@/utils/getTranslation';
import { TComponentProps, TNavigationJSON } from '@/types/types';
import NavContent from './NavContent';
import detectIsMobile from '@/utils/detectIsMobile';

const Navbar = async ({ lang }: TComponentProps) => {
  const t = (await getTranslation('navigation', lang)) as TNavigationJSON;

  const isMobile = await detectIsMobile();

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
      <NavContent lang={lang} content={t} isTouch={isMobile} />
    </header>
  );
};

export default Navbar;
