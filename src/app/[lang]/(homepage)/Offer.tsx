import classes from './Offer.module.scss';
import { SectionDark } from '@/components/Sections/Sections';
import { THomepageJSON, TLangSet } from '@/types/types';
import srcSetTemplate from '@/utils/srcSetTemplate';
import { LinkButton } from '@/components/Buttons/Buttons';

type TOffer = {
  content: THomepageJSON['offer'];
  lang: TLangSet;
};

const Offer = ({ content, lang }: TOffer) => {
  return (
    <SectionDark header={content.header} addClass={classes.offer}>
      <ul className={classes['offer__list']}>
        {content.list.map((item, i) => (
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
                loading="lazy"
              />
            </picture>
            <div className={classes['text-wrapper']}>
              <p>{item.text}</p>
              <LinkButton
                href={`/${lang}${item.href}`}
                aria_label={item.aria_label}
                addClass={classes['offer__btn']}
              >
                {content.link_label}
              </LinkButton>
            </div>
          </li>
        ))}
      </ul>
    </SectionDark>
  );
};

export default Offer;
