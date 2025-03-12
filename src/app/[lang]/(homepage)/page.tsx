import getTranslation from '@/utils/getTranslation';
import { THomepageJSON, TPageProps } from '@/types/types';
import detectIsMobile from '@/utils/detectIsMobile';
import { preloadImages } from '@/utils/preloadResources';

import Banner from './Banner';
import Advantage from './Advantage';
import Offer from './Offer';
import Clients from './Clients';
import Join from './Join';
import Feedback from './Feedback';
import { copyright, openGraphShared } from '@/app/shared-metadata';

export async function generateMetadata({ params }: TPageProps) {
  const { lang } = await params;
  const { metadata } = (await getTranslation(
    'homepage',
    lang
  )) as THomepageJSON;

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    other: { copyright: copyright[lang] },
    openGraph: {
      title: metadata.title,
      decsription: metadata.description,
      locale: lang,
      url: 'https://website-tv-client.vercel.app/',
      ...openGraphShared[lang],
    },
  };
}

export default async function Home({ params }: TPageProps) {
  const { lang } = await params;
  const t = (await getTranslation('homepage', lang)) as THomepageJSON;
  const isMobile = await detectIsMobile();

  const IMG_PRELOAD_LIST = ['/img/backgrounds/homepage_bg_1.avif'];
  if (!isMobile) {
    IMG_PRELOAD_LIST.push('/img/steam_ejector.avif');
  }
  preloadImages(IMG_PRELOAD_LIST);

  return (
    <>
      <h1 className="sr-only">{t.page_header}</h1>
      <Banner content={t.banner} isMobile={isMobile} />
      <Advantage content={t.advantage} lang={lang} />
      <Offer content={t.offer} lang={lang} />
      <Clients content={t.clients} />
      <Join content={t.join} lang={lang} />
      <Feedback content={t.feedback} lang={lang} />
    </>
  );
}
