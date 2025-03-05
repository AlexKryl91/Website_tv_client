import classes from './Banner.module.scss';
import { SectionIntro } from '@/components/Sections/Sections';
import { montserrat } from '@utils/fonts';
import { THomepageJSON } from '@/types/types';

type TBanner = {
  content: THomepageJSON['banner'];
};

const Banner = ({ content }: TBanner) => {
  return (
    <SectionIntro addClass={classes.banner} imgAlt={content.img_alt}>
      <div className={classes['h2-wrap']}>
        <h2 className={`${montserrat.className} ${classes['banner__header']}`}>
          {content.taglines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
      </div>
      <div className={classes['profile-wrap']}>
        <p className={classes.profile}>{content.profile}</p>
      </div>
    </SectionIntro>
  );
};

export default Banner;
