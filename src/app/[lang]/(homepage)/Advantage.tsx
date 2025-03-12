import classes from './Advantage.module.scss';
import SectionLight from '@/components/Sections/SectionLight';
import { THomepageJSON, TLangSet } from '@/types/types';
import { Fragment } from 'react';
import srcSetTemplate from '@/utils/srcSetTemplate';
import Link from 'next/link';

type TAdvantage = {
  content: THomepageJSON['advantage'];
  lang: TLangSet;
};

const CARD_IMGS = ['afip', 'krot'];
const ADV_ICONS = ['computer', 'science', 'experience'];

const Advantage = ({ content, lang }: TAdvantage) => {
  return (
    <SectionLight header={content.header}>
      <div className={classes.advantages}>
        <div className={classes.collage}>
          {CARD_IMGS.map((imgName, i) => (
            <Fragment key={imgName}>
              <picture className={classes['img-card']}>
                <source
                  srcSet={srcSetTemplate(imgName, 'avif')}
                  type="image/avif"
                />
                <img
                  src={`/img/${imgName}.jpg`}
                  srcSet={srcSetTemplate(imgName, 'jpg')}
                  width="270"
                  height="200"
                  alt={content.collage[i].img_alt}
                  loading="lazy"
                />
              </picture>
              <div className={classes['text-card']}>
                <span>{content.collage[i].number}</span>
                <span>{content.collage[i].text}</span>
              </div>
            </Fragment>
          ))}
        </div>
        <ul className={classes['adv-list']}>
          {content.adv_list.map((item, i) => (
            <li
              key={item.text}
              className={classes['adv-list__item']}
              style={{ backgroundImage: `url('/icons/${ADV_ICONS[i]}.svg')` }}
            >
              <Link href={`/${lang}${item.href}`} aria-label={item.aria_label}>
                <span>{item.text}</span>
                <span>{content.link_label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </SectionLight>
  );
};

export default Advantage;
