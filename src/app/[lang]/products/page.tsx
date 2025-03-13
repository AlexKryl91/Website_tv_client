import classes from './products.module.scss';
import { TPageProps, TProductsJSON } from '@/types/types';
import getTranslation from '@/utils/getTranslation';
import { copyright, openGraphShared } from '@/app/shared-metadata';
import { preloadImages } from '@/utils/preloadResources';
import SectionDark from '@/components/Sections/SectionDark';
import { Fragment } from 'react';
import srcSetTemplate from '@/utils/srcSetTemplate';
import SubSection from '@/components/Sections/SubSection';
import Link from 'next/link';

export async function generateMetadata({ params }: TPageProps) {
  const { lang } = await params;
  const { metadata } = (await getTranslation(
    'products',
    lang
  )) as TProductsJSON;

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    other: { copyright: copyright[lang] },
    openGraph: {
      title: metadata.title,
      decsription: metadata.description,
      locale: lang,
      url: 'https://website-tv-client.vercel.app/products',
      ...openGraphShared[lang],
    },
  };
}

const EJECTOR_IMGS = ['vhc', 'steam'];
const EQUIP_IMGS = ['asta', 'filter'];

export default async function Products({ params }: TPageProps) {
  const { lang } = await params;
  const t = (await getTranslation('products', lang)) as TProductsJSON;

  preloadImages(['/img/backgrounds/products_bg_1.avif']);

  return (
    <>
      <h1 className="sr-only">{t.page_header}</h1>

      <SectionDark
        addClass={classes['products-main']}
        isOnTop={true}
        header={t.products.header}
      >
        <div className={classes['dark-wrapper']}>
          <div className={classes['img-wrapper']}>
            {EJECTOR_IMGS.map((imgName, i) => (
              <Fragment key={imgName}>
                <picture className={classes['img-card']}>
                  <source
                    srcSet={srcSetTemplate(imgName, 'avif')}
                    type="image/avif"
                  />
                  <img
                    src={`/img/${imgName}.jpg`}
                    srcSet={srcSetTemplate(imgName, 'jpg')}
                    width="250"
                    height="170"
                    alt={t.products.main.img_alt[i]}
                    loading="lazy"
                  />
                </picture>
              </Fragment>
            ))}
          </div>
          <div className={classes['text-wrapper']}>
            <h3 className={classes['main-subheader']}>
              {t.products.main.title}
            </h3>
            <p className={classes.paragraph}>
              {t.products.main.text.map((part) => (
                <span key={part} className={classes.part}>
                  {part}
                </span>
              ))}
            </p>
          </div>
        </div>
      </SectionDark>

      <SubSection>
        <ul className={classes['add-list']}>
          {t.products.additional.map((equip, i) => (
            <li key={equip.title}>
              <picture className={classes['img-card']}>
                <source
                  srcSet={srcSetTemplate(EQUIP_IMGS[i], 'avif')}
                  type="image/avif"
                />
                <img
                  src={`/img/${EQUIP_IMGS[i]}.jpg`}
                  srcSet={srcSetTemplate(EQUIP_IMGS[i], 'jpg')}
                  width="300"
                  height="200"
                  alt={equip.img_alt}
                  loading="lazy"
                />
              </picture>
              <div className={classes['text-wrapper']}>
                <h3 className={classes.subheader}>{equip.title}</h3>
                <p className={classes.paragraph}>
                  <span className={classes.part}>
                    {equip.pargraph_and_link.start}
                    <Link
                      className={classes.link}
                      href={`/${lang}${equip.pargraph_and_link.link.href}`}
                      aria-label={equip.pargraph_and_link.link.aria_label}
                    >
                      {equip.pargraph_and_link.link.label}
                    </Link>
                    {equip.pargraph_and_link.end}
                  </span>

                  <span className={classes.part}>{equip.paragraph}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </SubSection>

      <SectionDark addClass={classes.services} header={t.services.header}>
        <div className={classes['services-wrapper']}>
          <p className={classes.paragraph}>
            {t.services.text.map((part) => (
              <span key={part} className={classes.part}>
                {part}
              </span>
            ))}
          </p>
          <h3 className={classes.subheader}>{t.services.list_title}</h3>
          <ul className={classes['services-list']}>
            {t.services.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </SectionDark>

      <div className={classes.prefooter}>
        <p className={classes['adv-text']}>{t.advert.text}</p>
        <Link
          className={classes['adv-link']}
          href={`/${lang}${t.advert.link.href}`}
          aria-label={t.advert.link.aria_label}
        >
          {t.advert.link.label}
        </Link>
      </div>
    </>
  );
}
