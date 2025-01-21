import { getLocales } from '@/locales/locales';
import { montserrat } from '../../utils/fonts';
import classes from './homepage.module.scss';

type TProps = {
  params: { lang: string };
};

export default async function Home({ params }: TProps) {
  const { lang } = params;

  const t = await getLocales(lang);

  return (
    // <h1 className={`${montserrat.className} ${classes.test}`}>HOME PAGE</h1>
    <h1 className={`${montserrat.className} ${classes.test}`}>{t.home.test}</h1>
  );
}
