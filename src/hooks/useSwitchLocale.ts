import { TLangSet } from '@/types/types';
import { usePathname, useRouter } from 'next/navigation';

const useSwitchLocale = (exLang: TLangSet) => {
  const pathname = usePathname();
  const router = useRouter();

  return (newLang: string) => {
    if (exLang !== newLang) {
      const pathnameHasLocale = !!pathname.match(/^\/(en|ru)/gi);
      const isRootPath = pathname.length > 3;
      const newPath = pathnameHasLocale
        ? pathname.replace(/^\/(en|ru)/gi, `${isRootPath ? '' : '/'}`)
        : `/${newLang}${pathname}`;

      router.push(newPath);
    }
  };
};

export default useSwitchLocale;
