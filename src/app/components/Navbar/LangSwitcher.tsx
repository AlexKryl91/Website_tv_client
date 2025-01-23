'use client';

import { TLocaleSet, TNavigationJSON } from '@/types/types';
import { usePathname, useRouter } from 'next/navigation';

import classes from './LangSwitcher.module.scss';

type TComponent = {
  lang: TLocaleSet;
  content: TNavigationJSON;
};

const LangSwitcher = ({ lang, content }: TComponent) => {
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(locale: 'ru' | 'en') {
    if (lang !== locale) {
      const pathnameHasLocale = !!pathname.match(/^\/(en|ru)/gi);
      const isRootPath = pathname.length > 3;

      const newPath = pathnameHasLocale
        ? pathname.replace(/^\/(en|ru)/gi, `${isRootPath ? '' : '/'}`)
        : `/${locale}${pathname}`;

      router.push(newPath);
    }
  }

  function styleHandler(locale: 'ru' | 'en') {
    return `${classes['switch-btn']} ${lang !== locale ? classes.active : ''}`;
  }

  return (
    <div className={classes.switcher}>
      <button
        className={styleHandler('ru')}
        title={content.lang_titles.ru}
        onClick={() => switchLocale('ru')}
      >
        ru
      </button>
      <button
        className={styleHandler('en')}
        title={content.lang_titles.en}
        onClick={() => switchLocale('en')}
      >
        en
      </button>
    </div>
  );
};

export default LangSwitcher;
