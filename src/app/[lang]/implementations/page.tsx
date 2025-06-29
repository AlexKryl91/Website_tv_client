import classes from './implementations.module.scss';
import { TPageProps, TImplementationsJSON } from '@/types/types';
import getTranslation from '@/utils/getTranslation';
import { copyright, openGraphShared } from '@/app/shared-metadata';
import { preloadImages } from '@/utils/preloadResources';
import SectionDark from '@/components/Sections/SectionDark';
import SectionLight from '@/components/Sections/SectionLight';
import Image from 'next/image';
import srcSetTemplate from '@/utils/srcSetTemplate';
import Link from 'next/link';

export async function generateMetadata({ params }: TPageProps) {
  const { lang } = await params;
  const { metadata } = (await getTranslation(
    'implementations',
    lang
  )) as TImplementationsJSON;

  return {
    metadataBase: new URL('https://website-tv-client.vercel.app/'),
    alternates: {
      canonical: '/implementations',
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

const KROT_PHOTO_LIST = ['krot_imp1', 'krot_imp2'];

export default async function Implementations({ params }: TPageProps) {
  const { lang } = await params;
  const t = (await getTranslation(
    'implementations',
    lang
  )) as TImplementationsJSON;

  preloadImages(['/img/backgrounds/implementations_bg.avif']);

  return (
    <>
      <h1 className="sr-only">{t.page_header}</h1>

      <SectionDark
        addClass={classes.implem}
        isOnTop={true}
        header={t.implementations.header}
      >
        <article className={classes['dark-wrapper']}>
          <h3 className="sr-only">{t.implementations.vhc.title}</h3>

          <div className={classes['intro-wrapper']}>
            <Image
              className={classes['unit-logo']}
              src={`/img/${t.implementations.vhc.logo}_${lang}.svg`}
              width={110}
              height={70}
              alt={t.implementations.vhc.logo_alt}
            />

            <p className={classes.intro}>{t.implementations.vhc.intro}</p>
          </div>

          <div className={classes['desc-wrapper']}>
            <p>
              {t.implementations.vhc.desc.map((p) => (
                <span key={p} className={classes.part}>
                  {p}
                </span>
              ))}
            </p>

            <picture className={classes['photo-vert']}>
              <source
                srcSet={srcSetTemplate('mnpz', 'avif')}
                type="image/avif"
              />
              <img
                src={`/img/mnpz.jpg`}
                srcSet={srcSetTemplate('mnpz', 'jpg')}
                width="200"
                height="260"
                alt={t.implementations.vhc.img_alt}
                loading="lazy"
              />
            </picture>
          </div>
        </article>

        <article className={classes['dark-wrapper']}>
          <h3 className="sr-only">{t.implementations.jc.title}</h3>

          <div className={classes['intro-wrapper']}>
            <Image
              className={classes['unit-logo']}
              src={`/img/${t.implementations.jc.logo}_${lang}.svg`}
              width={110}
              height={70}
              alt={t.implementations.jc.logo_alt}
            />

            <p className={classes.intro}>{t.implementations.jc.intro}</p>
          </div>

          <div className={classes['desc-wrapper']}>
            <div>
              {t.implementations.jc.desc.map((p) => (
                <p key={p} className={classes.part}>
                  {p}
                </p>
              ))}
              <ul className={classes['params-list']}>
                {t.implementations.jc.params_list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <picture className={classes['photo-vert']}>
              <source
                srcSet={srcSetTemplate('turkmenbashi', 'avif')}
                type="image/avif"
              />
              <img
                src={`/img/turkmenbashi.jpg`}
                srcSet={srcSetTemplate('turkmenbashi', 'jpg')}
                width="200"
                height="260"
                alt={t.implementations.jc.img_alt}
                loading="lazy"
              />
            </picture>
          </div>
        </article>

        <article className={classes['dark-wrapper']}>
          <h3 className="sr-only">{t.implementations.jau.title}</h3>

          <div className={classes['intro-wrapper']}>
            <Image
              className={classes['unit-logo']}
              src={`/img/${t.implementations.jau.logo}_${lang}.svg`}
              width={110}
              height={70}
              alt={t.implementations.jau.logo_alt}
            />

            <p className={classes.intro}>{t.implementations.jau.intro}</p>
          </div>

          <div className={classes['photo-wrapper']}>
            {KROT_PHOTO_LIST.map((img, i) => (
              <picture key={img} className={classes['photo-horiz']}>
                <source
                  srcSet={srcSetTemplate(img, 'avif')}
                  type="image/avif"
                />
                <img
                  src={`/img/${img}.jpg`}
                  srcSet={srcSetTemplate(img, 'jpg')}
                  width="356"
                  height="200"
                  alt={t.implementations.jau.img_alt[i]}
                  loading="lazy"
                />
              </picture>
            ))}
          </div>
        </article>
      </SectionDark>

      <SectionLight header={t.geography.header}>
        <div>MAP OF IMPLEMENTATIONS</div>

        <p className={classes['advert__text']}>{t.advert.text}</p>
        <Link
          className={classes['advert__link']}
          href={`/${lang}${t.advert.link.href}`}
          aria-label={t.advert.link.aria_label}
        >
          {t.advert.link.label}
        </Link>
      </SectionLight>
    </>
  );
}
