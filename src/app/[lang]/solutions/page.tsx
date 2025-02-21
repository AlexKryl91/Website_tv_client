import classes from './solutions.module.scss';
import getLocale from '@utils/getLocale';
import { TSolutionsJSON, TPageProps } from '@/types/types';
import { Fragment } from 'react';
import Image from 'next/image';
import Subsection from './Subsection';
import { montserrat } from '@utils/fonts';

const SYSTEMS_IMGS = ['vacuum.svg', 'compress.svg', 'absorb.svg'];

export default async function Solutions({ params }: TPageProps) {
  const { lang } = await params;
  const t = (await getLocale('solutions', lang)) as TSolutionsJSON;

  const styleFlag = `${classes.flag} ${classes[lang]}`;

  return (
    <>
      <h1 className="sr-only">{t.page_header}</h1>

      <section className={classes.solutions}>
        <h2
          className={`${montserrat.className} ${classes['solutions__header']}`}
        >
          {t.header}
        </h2>

        {t.systems.map((system, i) => (
          <Fragment key={system.title}>
            <h3 className="sr-only">{system.title}</h3>
            <details name="system" className={classes.details}>
              <summary className={classes.summary}>
                <span className={classes['img-card']}>
                  <Image
                    src={`/img/${SYSTEMS_IMGS[i]}`}
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
              {system.units.length === 1 ? (
                <Subsection
                  content={system.units[0]}
                  common={t.common}
                  lang={lang}
                />
              ) : (
                <div className={classes.testing}>НЕСКОЛЬКО УСТАНОВОК</div>
              )}
            </details>
          </Fragment>
        ))}
      </section>

      <div className={classes.prefooter}></div>
    </>
  );
}
