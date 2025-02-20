import classes from './solutions.module.scss';
import getLocale from '@utils/getLocale';
import { TSolutionsJSON, TPageProps } from '@/types/types';
import { SectionDark } from '@/components/Sections/Sections';
import { Fragment } from 'react';
import Image from 'next/image';
import { montserrat } from '@utils/fonts';

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
              <article className={classes.subsection}>
                <h4
                  className={`${montserrat.className} ${classes['subsection__header']}`}
                >
                  {system.units[0].title}
                </h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                recusandae, voluptatum necessitatibus voluptatibus eveniet,
                quaerat dignissimos voluptate eos provident at ducimus
                consequuntur tempora. Natus quas possimus laudantium cumque
                aliquam ad? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Aspernatur optio illo sint vel doloremque doloribus iusto,
                nesciunt eius magni quae odit excepturi cupiditate odio dolorum
                earum id impedit reiciendis corrupti! Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Neque, dolores, laudantium
                molestiae distinctio sit ducimus ad nostrum officiis aut
                reiciendis repellat recusandae dolorem quae magnam accusantium
                nisi, aliquid dignissimos consequuntur.
              </article>
            </details>
          </Fragment>
        ))}
      </SectionDark>

      <div className={classes.prefooter}></div>
    </>
  );
}
