import classes from './solutions.module.scss';
import getTranslation from '@/utils/getTranslation';
import { TSolutionsJSON, TPageProps } from '@/types/types';
import Image from 'next/image';
import Unit from './Unit';
import { montserrat } from '@utils/fonts';
import { Details, SubDetails } from './Details';
import { preloadImages } from '@/utils/preloadResources';
import { copyright, openGraphShared } from '@/app/shared-metadata';

export async function generateMetadata({ params }: TPageProps) {
  const { lang } = await params;
  const { metadata } = (await getTranslation(
    'solutions',
    lang
  )) as TSolutionsJSON;

  return {
    metadataBase: new URL('https://website-tv-client.vercel.app/'),
    alternates: {
      canonical: '/solutions',
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

const SYSTEMS_IMGS = ['vacuum.svg', 'compress.svg', 'absorb.svg'];

export default async function Solutions({ params }: TPageProps) {
  const { lang } = await params;
  const t = (await getTranslation('solutions', lang)) as TSolutionsJSON;

  preloadImages(['/img/backgrounds/solutions_bg.avif']);

  const styleHeader = `${montserrat.className} ${classes['solutions__header']}`;
  const styleFlag = `${classes.flag} ${classes[lang]}`;

  const extendedSys = t.systems[0];
  const restSys = t.systems.slice(-2);

  return (
    <>
      <h1 className="sr-only">{t.page_header}</h1>

      <section className={classes.solutions}>
        <h2 className={styleHeader}>{t.header}</h2>

        <Details>
          <summary className={classes.summary}>
            <h3 className="sr-only">{extendedSys.title}</h3>
            <span className={classes['img-card']}>
              <Image
                src={`/img/${SYSTEMS_IMGS[0]}`}
                width={180}
                height={180}
                alt={extendedSys.title}
              />
            </span>
            <span className={classes['text-wrapper']}>
              <span className={classes.text}>
                <strong>{extendedSys.title}</strong>
                {extendedSys.text}
              </span>
              <span className={styleFlag}></span>
            </span>
          </summary>
          {extendedSys.units.map((unit) => (
            <SubDetails key={unit.title} btnLabels={unit.state_btn}>
              <summary></summary>
              <Unit content={unit} common={t.common} lang={lang} />
            </SubDetails>
          ))}
        </Details>

        {restSys.map((system, i) => (
          <Details key={system.title} btnLabels={system.units[0].state_btn}>
            <summary className={classes.summary}>
              <h3 className="sr-only">{system.title}</h3>
              <span className={classes['img-card']}>
                <Image
                  src={`/img/${SYSTEMS_IMGS[i + 1]}`}
                  width={180}
                  height={180}
                  alt={system.title}
                />
              </span>
              <span className={classes['text-wrapper']}>
                <span className={classes.text}>
                  <strong>{system.title}</strong>
                  {system.text}
                </span>
                <span className={styleFlag}></span>
              </span>
            </summary>
            <Unit content={system.units[0]} common={t.common} lang={lang} />
          </Details>
        ))}
      </section>

      <div className={classes.prefooter}></div>
    </>
  );
}
