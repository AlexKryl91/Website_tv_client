// import Image from 'next/image';
import Link from 'next/link';
import { getLocale } from '@utils/getLocale';
import { montserrat } from '@utils/fonts';
import classes from './homepage.module.scss';
import { THomepageJSON, TPageProps } from '@/types/types';
import srcSetTemplate from '@/utils/srcSetTemplate';
import { Fragment } from 'react';
import {
  SectionDark,
  SectionIntro,
  SectionLight,
} from '@/components/Sections/Sections';

const cardImgs = ['afip', 'krot'];
const advLinks = ['products', 'about', 'implementations'];
const offerLinks = ['solutions', 'products', 'implementations'];

export default async function Home({ params }: TPageProps) {
  const { lang } = await params;
  const t = (await getLocale('homepage', lang)) as THomepageJSON;

  return (
    <main>
      <h1 className="sr-only">{t.banner.header}</h1>

      <SectionIntro addClass={classes.banner} imgAlt={t.banner.img_alt}>
        <div className={classes['h2-wrap']}>
          <h2
            className={`${montserrat.className} ${classes['banner__header']}`}
          >
            {t.banner.taglines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
        </div>
        <div className={classes['profile-wrap']}>
          <p className={classes.profile}>{t.banner.profile}</p>
        </div>
      </SectionIntro>

      <SectionLight header={t.advantage.header}>
        <div className={classes.advantages}>
          <div className={classes.collage}>
            {cardImgs.map((imgName, i) => (
              <Fragment key={imgName}>
                <picture className={classes['img-card']}>
                  <source
                    srcSet={srcSetTemplate(imgName, 'avif')}
                    type="image/avif"
                  />
                  <img
                    src={`img/${imgName}.jpg`}
                    srcSet={srcSetTemplate(imgName, 'jpg')}
                    width="270"
                    height="200"
                    alt={t.advantage.collage[i].img_alt}
                  />
                </picture>
                <div className={classes['text-card']}>
                  <span>{t.advantage.collage[i].number}</span>
                  <span>{t.advantage.collage[i].text}</span>
                </div>
              </Fragment>
            ))}
          </div>
          <ul className={classes['adv-list']}>
            {t.advantage.adv_list.map((item, i) => (
              <li key={item} className={classes['adv-list__item']}>
                <Link href={`/${lang}/${advLinks[i]}`}>
                  <span>{item}</span>
                  <span>{t.advantage.link_label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </SectionLight>

      <SectionDark addClass={classes.offer} header={t.offer.header}>
        <ul className={classes['offer__list']}>
          {t.offer.list.map((item, i) => (
            <li key={item.text}>
              <picture className={classes['item-img']}>
                <source
                  srcSet={srcSetTemplate(`offer_item${i + 1}`, 'avif')}
                  type="image/avif"
                />
                <img
                  src={`img/offer_item${i + 1}.jpg`}
                  srcSet={srcSetTemplate(`offer_item${i + 1}`, 'jpg')}
                  width="270"
                  height="180"
                  alt={item.img_alt}
                />
              </picture>
              <div className={classes['text-wrapper']}>
                <span>{item.text}</span>
                <Link href={`/${lang}/${offerLinks[i]}`}>
                  {t.offer.link_label}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </SectionDark>

      <SectionLight header={t.clients.header}>
        <div>| ===&gt; CLIENTS</div>
      </SectionLight>

      <SectionDark addClass={classes.join} header={t.join.header}>
        <div>| ===&gt; JOIN US</div>
      </SectionDark>

      <SectionLight header={t.feedback.header}>
        <div>| ===&gt; CONTACT US</div>
      </SectionLight>
    </main>
  );
}
