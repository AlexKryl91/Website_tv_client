import classes from './Sections.module.scss';
import { montserrat } from '@utils/fonts';
import { AnimatedBar } from '../AnimatedBar/AnimatedBar';

type TSectionDark = {
  children: React.ReactNode;
  isOnTop?: boolean;
  addClass?: string;
  header?: string;
};

const SectionDark = ({
  children,
  isOnTop = false,
  header,
  addClass = '',
}: TSectionDark) => {
  const bodyStyle = `${classes['section--dark__body']} ${
    isOnTop ? classes.top : classes.middle
  } ${addClass}`;

  return (
    <section className={`${classes.section} ${classes['section--dark']}`}>
      {!isOnTop && <AnimatedBar />}
      <div className={bodyStyle}>
        <h2 className={`${montserrat.className} ${classes['section__header']}`}>
          {header}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default SectionDark;
