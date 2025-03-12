import classes from './Sections.module.scss';
import { montserrat } from '@utils/fonts';

type TSectionLight = {
  children: React.ReactNode;
  header?: string;
};

const SectionLight = ({ children, header }: TSectionLight) => {
  return (
    <section className={`${classes.section} ${classes['section--light']}`}>
      {header && (
        <h2 className={`${montserrat.className} ${classes['section__header']}`}>
          {header}
        </h2>
      )}

      {children}
    </section>
  );
};

export default SectionLight;
