import classes from './Sections.module.scss';

type TSubSection = {
  children: React.ReactNode;
  addClass?: string;
};

const SubSection = ({ children, addClass = '' }: TSubSection) => {
  return (
    <article
      className={`${classes.section} ${classes['section--light']} ${classes.subsection} ${addClass}`}
    >
      {children}
    </article>
  );
};

export default SubSection;
