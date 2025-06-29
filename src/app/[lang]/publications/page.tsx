import classes from './publications.module.scss';
import { TPageProps, TPublicationsJSON } from '@/types/types';
import getTranslation from '@/utils/getTranslation';
import { copyright, openGraphShared } from '@/app/shared-metadata';
import { preloadImages } from '@/utils/preloadResources';
import SectionDark from '@/components/Sections/SectionDark';
import SectionLight from '@/components/Sections/SectionLight';

export async function generateMetadata({ params }: TPageProps) {
  const { lang } = await params;
  const { metadata } = (await getTranslation(
    'publications',
    lang
  )) as TPublicationsJSON;

  return {
    metadataBase: new URL('https://website-tv-client.vercel.app/'),
    alternates: {
      canonical: '/publications',
      languages: {
        'ru-RU': '/ru',
        'en-US': '/en',
      },
    },
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    other: { copyright: copyright[lang] },
    openGraph: {
      title: metadata.title,
      decsription: metadata.description,
      locale: lang,
      ...openGraphShared[lang],
    },
  };
}

export default async function Publications({ params }: TPageProps) {
  const { lang } = await params;
  const t = (await getTranslation('publications', lang)) as TPublicationsJSON;

  preloadImages(['/img/backgrounds/publications_bg.avif']);

  return (
    <>
      <h1 className="sr-only">{t.page_header}</h1>

      <SectionDark addClass={classes.public} isOnTop={true} header={t.header}>
        <div className={classes['dark-wrapper']}>
          <p>
            {t.intro.map((p) => (
              <span key={p} className={classes.part}>
                {p}
              </span>
            ))}
          </p>
        </div>
      </SectionDark>

      <SectionLight>
        <div>LIST OF PUBLICATIONS</div>
      </SectionLight>
    </>
  );
}
