'use client';

import { TLangSet } from '@/types/types';
import { usePathname, useRouter } from 'next/navigation';
import classes from './LangSwitcher.module.scss';

type TSwitcherBtn = {
  isActive: boolean;
  title: string;
  locale: string;
  clickHandler: () => void;
};

const LangButton = ({
  isActive,
  title,
  locale,
  clickHandler,
}: TSwitcherBtn) => {
  const style = `${classes['switch-btn']} ${isActive ? classes.active : ''}`;

  return (
    <button onClick={clickHandler} className={style} title={title}>
      {locale}
    </button>
  );
};

type TSwitcher = {
  lang: TLangSet;
  titles: { [key: string]: string };
};

const LangSwitcher = ({ lang, titles }: TSwitcher) => {
  const pathname = usePathname();
  const router = useRouter();

  const locales = ['ru', 'en'];

  function switchLocale(locale: string) {
    if (lang !== locale) {
      const pathnameHasLocale = !!pathname.match(/^\/(en|ru)/gi);
      const isRootPath = pathname.length > 3;
      const newPath = pathnameHasLocale
        ? pathname.replace(/^\/(en|ru)/gi, `${isRootPath ? '' : '/'}`)
        : `/${locale}${pathname}`;

      router.push(newPath);
    }
  }

  return (
    <div className={classes.switcher}>
      {locales.map((locale) => (
        <LangButton
          key={locale}
          isActive={lang !== locale}
          title={titles[locale]}
          locale={locale}
          clickHandler={() => switchLocale(locale)}
        />
      ))}
    </div>
  );
};

export default LangSwitcher;
