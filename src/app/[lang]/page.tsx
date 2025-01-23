// import { getLocales } from '@/locales/locales';
import { montserrat } from '@/utils/fonts';
import classes from './homepage.module.scss';
import { TPageProps } from '@/types/types';

import localeRU from '@/locales/homepage_ru.json';
import localeEN from '@/locales/homepage_en.json';

export default async function Home({ params }: TPageProps) {
  const { lang } = await params;
  // const t = await getLocales(lang);

  const t = lang === 'ru' ? localeRU : localeEN;

  return (
    <h1 className={`${montserrat.className} ${classes.test}`}>{t.test}</h1>
  );
}
