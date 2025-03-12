import classes from './Join.module.scss';
import { THomepageJSON, TLangSet } from '@/types/types';
import SectionDark from '@/components/Sections/SectionDark';
import { LinkButton } from '@/components/Buttons/Buttons';

type TJoin = {
  content: THomepageJSON['join'];
  lang: TLangSet;
};

const Join = ({ content, lang }: TJoin) => {
  return (
    <SectionDark header={content.header} addClass={classes.join}>
      <div className={classes['join__wrapper']}>
        <p className={classes['join__text']}>{content.text}</p>
        <div className={classes['btn-wrapper']}>
          {content.links.map((link) => (
            <LinkButton
              key={link.label}
              href={`/${lang}${link.href}`}
              aria_label={link.aria_label}
            >
              {link.label}
            </LinkButton>
          ))}
        </div>
      </div>
    </SectionDark>
  );
};

export default Join;
