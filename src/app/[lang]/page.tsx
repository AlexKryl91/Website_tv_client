import { getLocale } from '@utils/getLocale';
import { montserrat } from '@utils/fonts';
import classes from './homepage.module.scss';
import { THomepageJSON, TPageProps } from '@/types/types';

export default async function Home({ params }: TPageProps) {
  const { lang } = await params;
  const t = (await getLocale('homepage', lang)) as THomepageJSON;

  const style = `${montserrat.className} ${classes['sr-only']}`;

  return (
    <main>
      <h1 className={style}>{t.banner.header}</h1>
      <section className={classes.test}>
        <div className={classes['section-body']}>TEST fdhgfdhgfh</div>
      </section>
    </main>
  );
}
