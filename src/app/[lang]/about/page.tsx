import classes from './about.module.scss';
import { TPageProps, TAboutJSON } from '@/types/types';
import getTranslation from '@/utils/getTranslation';
import { copyright, openGraphShared } from '@/app/shared-metadata';
import { preloadImages } from '@/utils/preloadResources';
import SectionDark from '@/components/Sections/SectionDark';
import SubSection from '@/components/Sections/SubSection';
import srcSetTemplate from '@/utils/srcSetTemplate';
import Link from 'next/link';

export async function generateMetadata({ params }: TPageProps) {
  const { lang } = await params;
  const { metadata } = (await getTranslation('about', lang)) as TAboutJSON;

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    other: { copyright: copyright[lang] },
    openGraph: {
      title: metadata.title,
      decsription: metadata.description,
      locale: lang,
      url: 'https://website-tv-client.vercel.app/about',
      ...openGraphShared[lang],
    },
  };
}

const CERTIFICATE_LIST = ['cert1', 'cert2', 'cert3', 'cert4'];

export default async function About({ params }: TPageProps) {
  const { lang } = await params;
  const t = (await getTranslation('about', lang)) as TAboutJSON;

  preloadImages(['/img/backgrounds/about_bg_1.avif']);

  return (
    <>
      <h1 className="sr-only">{t.page_header}</h1>

      <SectionDark addClass={classes.about} isOnTop={true} header={t.header}>
        <div className={classes.general}>
          <div className={classes.annotation}>
            <picture className={classes.year}>
              <source
                srcSet={srcSetTemplate('1992', 'avif')}
                type="image/avif"
              />
              <img
                src={`/img/1992.png`}
                srcSet={srcSetTemplate('1992', 'png')}
                width="440"
                height="233"
                alt="1992"
              />
            </picture>
            <p className={classes['annotation__text']}>
              {t.general.annotation}
            </p>
          </div>
          <p className={classes.history}>
            <span className={classes.part}>{t.general.paragraph}</span>
            <span className={classes.part}>
              {t.general.pargraph_and_link.start}
              <Link
                className={classes.link}
                href={`/${lang}${t.general.pargraph_and_link.link.href}`}
                aria-label={t.general.pargraph_and_link.link.label}
              >
                {t.general.pargraph_and_link.link.label}
              </Link>
              {t.general.pargraph_and_link.end}
            </span>
          </p>
        </div>
      </SectionDark>

      <SubSection>
        <div className={classes.mstu}>
          <picture className={classes['mstu__logo']}>
            <source srcSet={srcSetTemplate('mstu', 'avif')} type="image/avif" />
            <img
              src={`/img/mstu.png`}
              srcSet={srcSetTemplate('mstu', 'png')}
              width="186"
              height="220"
              alt={t.mstu.img_alt}
            />
          </picture>
          <p className={classes['mstu__text']}>
            <span className={classes.part}>
              {t.mstu.pargraph_and_link.start}
              <a
                className={classes['mstu__link']}
                href={t.mstu.pargraph_and_link.link.href}
                aria-label={t.mstu.pargraph_and_link.link.label}
                target="_blank"
              >
                {t.mstu.pargraph_and_link.link.label}
              </a>
              {t.mstu.pargraph_and_link.end}
            </span>
            <span className={classes.part}>{t.mstu.paragraph}</span>
          </p>
        </div>
      </SubSection>

      <SectionDark addClass={classes.founder}>
        <div className={classes['dark-wrapper']}>
          <h2 className={classes['founder__title']}>{t.founder.title}</h2>
          <div className={classes['founder__wrapper']}>
            <picture className={classes.photo}>
              <source
                srcSet={srcSetTemplate('tsegelsky', 'avif')}
                type="image/avif"
              />
              <img
                src={`/img/tsegelsky.png`}
                srcSet={srcSetTemplate('tsegelsky', 'png')}
                width="150"
                height="200"
                alt={t.founder.img_alt}
              />
            </picture>
            <div>
              <h3 className={classes['founder__name']}>{t.founder.name}</h3>
              <p className={classes['founder__position']}>
                {t.founder.position}
              </p>
              <p className={classes['founder__desc']}>{t.founder.desc}</p>
            </div>
          </div>
        </div>
        <div className={classes['certif-wrapper']}>
          {CERTIFICATE_LIST.map((img) => (
            <picture key={img} className={classes.certif}>
              <source srcSet={srcSetTemplate(img, 'avif')} type="image/avif" />
              <img
                src={`/img/${img}.jpg`}
                srcSet={srcSetTemplate(img, 'jpeg')}
                width="210"
                alt=""
              />
            </picture>
          ))}
        </div>
      </SectionDark>

      <div className={classes.prefooter}>
        <p className={classes.guarantee}>{t.guarantee}</p>
      </div>
    </>
  );
}
