'use client';

import { TComponentProps } from '@/types/types';
import { usePathname, useRouter } from 'next/navigation';

// import classes from './LangSwitcher.module.scss';

const LangSwitcher = ({ lang }: TComponentProps) => {
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(locale: 'ru' | 'en') {
    if (lang !== locale) {
      // console.log("| =======> Let's switch lang!!! =======> ");
      const pathnameHasLocale = !!pathname.match(/^\/(en|ru)/gi);
      const isRootPath = pathname.length > 3;
      // console.log('| =======> Locale exist? =======>', pathnameHasLocale);

      const newPath = pathnameHasLocale
        ? pathname.replace(/^\/(en|ru)/gi, `${isRootPath ? '' : '/'}`)
        : `/${locale}${pathname}`;

      // console.log('| =======> New path =======>', newPath);

      router.push(newPath);
    }
  }

  return (
    <>
      <button onClick={() => switchLocale('ru')}>RU</button>
      <button onClick={() => switchLocale('en')}>EN</button>
    </>
  );
};

export default LangSwitcher;
