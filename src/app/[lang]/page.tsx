import { getLocale } from '@utils/getLocale';
import { montserrat } from '@utils/fonts';
import classes from './homepage.module.scss';
import { THomepageJSON, TPageProps } from '@/types/types';
import DecorationStripes from '@img/banner_stripes.svg';

export default async function Home({ params }: TPageProps) {
  const { lang } = await params;
  const t = (await getLocale('homepage', lang)) as THomepageJSON;

  const styleH2 = `${montserrat.className} ${classes['section-header']} ${classes['banner-header']}`;

  return (
    <main>
      <h1 className="sr-only">{t.banner.header}</h1>
      <section className={classes.section}>
        <div className={`${classes['section-body']} ${classes.banner}`}>
          <h2 className={styleH2}>
            {t.banner.taglines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className={classes['banner-profile']}>{t.banner.profile}</p>
          {/* <div className={classes['animated-title']}>
            <div className={classes['text-top']}>
              <div>
                <span>mimicking</span>
                <span>apple&apos;s design</span>
              </div>
            </div>
            <div className={classes['text-bottom']}>
              <div>for the win!</div>
            </div>
          </div> */}
        </div>
        <DecorationStripes className={classes.stripes} />
        <picture>
          <source srcSet="/img/steam_ejector.avif" type="image/avif" />
          <img
            className={classes['ejector-img']}
            src="/img/steam_ejector.png"
            width="520"
            height="412"
            alt={t.banner.img_alt}
          />
        </picture>
      </section>
      <section className={`${classes.section} ${classes.light}`}>
        <h2 className={`${montserrat.className} ${classes['section-header']}`}>
          {t.advantage.header}
        </h2>
      </section>
    </main>
  );
}
