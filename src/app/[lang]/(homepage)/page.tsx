import getLocale from '@utils/getLocale';
import { THomepageJSON, TPageProps } from '@/types/types';

import Banner from './Banner';
import Advantage from './Advantage';
import Offer from './Offer';
import Clients from './Clients';
import Join from './Join';
import Feedback from './Feedback';

export default async function Home({ params }: TPageProps) {
  const { lang } = await params;
  const t = (await getLocale('homepage', lang)) as THomepageJSON;

  return (
    <>
      <h1 className="sr-only">{t.banner.header}</h1>
      <Banner content={t.banner} />
      <Advantage content={t.advantage} lang={lang} />
      <Offer content={t.offer} lang={lang} />
      <Clients content={t.clients} />
      <Join content={t.join} lang={lang} />
      <Feedback content={t.feedback} lang={lang} />
    </>
  );
}
