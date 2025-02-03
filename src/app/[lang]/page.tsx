// import Image from 'next/image';
import Link from 'next/link';
import { getLocale } from '@utils/getLocale';
import { montserrat } from '@utils/fonts';
import classes from './homepage.module.scss';
import { THomepageJSON, TPageProps } from '@/types/types';
import StripedBg from '@img/striped_bg_animated.svg';
import srcSetTemplate from '@/utils/srcSetTemplate';
import { Fragment } from 'react';

const styleH2 = `${montserrat.className} ${classes['section-header']} ${classes['banner-header']}`;
const cardImgs = ['afip', 'krot'];
const advLinks = ['products', 'about', 'implementations'];

export default async function Home({ params }: TPageProps) {
  const { lang } = await params;
  const t = (await getLocale('homepage', lang)) as THomepageJSON;

  return (
    <main>
      <h1 className="sr-only">{t.banner.header}</h1>

      <section
        className={`${classes.section} ${classes['section--dark']} ${classes.banner}`}
      >
        <div
          className={`${classes['section--dark__body']} ${classes['banner__body']}`}
        >
          <div className={classes['h2-wrap']}>
            <h2 className={styleH2}>
              {t.banner.taglines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h2>
          </div>
          <div className={classes['profile-wrap']}>
            <p className={classes.profile}>{t.banner.profile}</p>
          </div>
        </div>
        <StripedBg className={classes.stripes} />
        <picture>
          <source srcSet="img/steam_ejector.avif" type="image/avif" />
          <img
            className={classes['ejector-img']}
            src="img/steam_ejector.png"
            width="520"
            height="412"
            alt={t.banner.img_alt}
          />
        </picture>
      </section>

      <section className={`${classes.section} ${classes['section--light']}`}>
        <h2 className={`${montserrat.className} ${classes['section-header']}`}>
          {t.advantage.header}
        </h2>
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
                <Link href={`/${lang}/${advLinks[i]}`} className={classes.logo}>
                  <span>{item}</span>
                  <span>{t.advantage.link_label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className={`${classes.section} ${classes['section--dark']} ${classes.offer}`}
      >
        <div
          className={`${classes['section--dark__body']} ${classes['offer__body']}`}
        ></div>
      </section>
    </main>
  );
}
