import classes from './solutions.module.scss';
import getLocale from '@utils/getLocale';
import { TSolutionsJSON, TPageProps } from '@/types/types';
import { SectionDark } from '@/components/Sections/Sections';
import { Fragment } from 'react';
import Image from 'next/image';
import Subsection from './Subsection';

const SYSTEMS_IMGS = ['vacuum.svg', 'compress.svg', 'absorb.svg'];

export default async function Solutions({ params }: TPageProps) {
  const { lang } = await params;
  const t = (await getLocale('solutions', lang)) as TSolutionsJSON;

  const styleFlag = `${classes.flag} ${classes[lang]}`;

  return (
    <>
      <h1 className="sr-only">{t.page_header}</h1>

      <SectionDark
        header={t.header}
        addClass={classes.solutions}
        isOnTop={true}
      >
        {t.systems.map((system, i) => (
          <Fragment key={system.title}>
            <h3 className="sr-only">{system.title}</h3>
            <details name="system" className={classes.details}>
              <summary className={classes.summary}>
                <div className={classes['img-card']}>
                  <Image
                    src={`/img/${SYSTEMS_IMGS[i]}`}
                    width={180}
                    height={180}
                    alt={system.title}
                  />
                </div>
                <div className={classes['text-wrapper']}>
                  <p>
                    <strong>{system.title}</strong>
                    {system.text}
                  </p>
                  <div className={styleFlag}></div>
                </div>
              </summary>
              {system.units.length === 1 ? (
                <Subsection
                  content={system.units[0]}
                  common={t.common}
                  lang={lang}
                />
              ) : (
                <div>НЕСКОЛЬКО УСТАНОВОК</div>
              )}
            </details>
          </Fragment>
        ))}
      </SectionDark>

      <div className={classes.prefooter}></div>
    </>
  );
}
