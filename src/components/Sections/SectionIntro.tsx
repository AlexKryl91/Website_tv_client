import classes from './Sections.module.scss';
import Decoration from './Decoration';

type TSectionIntro = {
  children: React.ReactNode;
  addClass: string;
  imgAlt: string;
  isMobile: boolean;
};

const SectionIntro = ({
  children,
  addClass,
  imgAlt,
  isMobile,
}: TSectionIntro) => {
  return (
    <section className={`${classes.section} ${classes['section--dark']}`}>
      <div
        className={`${classes['section--dark__body']} ${classes.intro} ${addClass}`}
      >
        {children}
      </div>
      <Decoration imgAlt={imgAlt} isMobile={isMobile} />
    </section>
  );
};

export default SectionIntro;
