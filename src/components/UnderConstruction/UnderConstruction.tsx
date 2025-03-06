import classes from './UnderConstruction.module.scss';
import { TLangSet } from '@/types/types';
import { montserrat } from '@utils/fonts';
import Image from 'next/image';

const PAGE_TEXT = {
  ru: {
    header: 'Служебная страница. Запрашиваемая страница пока не доступна',
    alt: 'Сборка веб-страницы',
    title: 'Страница в разработке',
    text: 'Мы вносим улучшения. Страница скоро появится!',
  },
  en: {
    header: 'Service page. The requested page is not yet available',
    alt: 'Web page construction',
    title: 'Page is under construction',
    text: "We're making improvements. The page coming soon!",
  },
};

type TUcPage = {
  lang: TLangSet;
};

const UnderConstruction = ({ lang }: TUcPage) => {
  return (
    <>
      <h1 className="sr-only">{PAGE_TEXT[lang].header}</h1>
      <section className={classes.uc}>
        <div className={classes['uc__body']}>
          <Image
            className={classes['uc__img']}
            src="/img/under_construction.svg"
            width={300}
            height={360}
            alt={PAGE_TEXT[lang].alt}
          />
          <Image
            className={classes['crossed-lines']}
            src="/img/crossed_danger_lines.svg"
            width={1280}
            height={460}
            alt=""
          />
          <h2 className={`${montserrat.className} ${classes['uc__header']}`}>
            {PAGE_TEXT[lang].title}
          </h2>
          <p className={classes['uc__text']}>{PAGE_TEXT[lang].text}</p>
        </div>
      </section>
      <div className={classes['uc-prefooter']}></div>
    </>
  );
};

export default UnderConstruction;
