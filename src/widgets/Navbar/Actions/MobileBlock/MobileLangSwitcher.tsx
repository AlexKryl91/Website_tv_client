'use client';

import { TLangSet } from '@/types/types';
import { usePathname, useRouter } from 'next/navigation';
import classes from './MobileLangSwitcher.module.scss';
import MobileLangButton from './MobileLangButton';

type TSwitcher = {
  lang: TLangSet;
  titles: { [key: string]: string };
};

const MobileLangSwitcher = ({ lang, titles }: TSwitcher) => {
  const pathname = usePathname();
  const router = useRouter();

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
      {Object.keys(titles).map((locale) => (
        <MobileLangButton
          key={locale}
          isActive={lang !== locale}
          label={locale}
          title={titles[locale]}
          onClick={() => switchLocale(locale)}
        />
      ))}
    </div>
  );
};

export default MobileLangSwitcher;
