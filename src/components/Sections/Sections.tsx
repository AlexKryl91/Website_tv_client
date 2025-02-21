import classes from './Sections.module.scss';
import { montserrat } from '@utils/fonts';
import StripedBg from '@img/striped_bg_animated.svg';
import AnimatedBar from '../AnimatedBar/AnimatedBar';

type TSectionDark = {
  children: React.ReactNode;
  isOnTop?: boolean;
  addClass?: string;
  header?: string;
};

export const SectionDark = ({
  children,
  isOnTop = false,
  header,
  addClass,
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

type TSectionLight = {
  children: React.ReactNode;
  header?: string;
};

export const SectionLight = ({ children, header }: TSectionLight) => {
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

type TSectionIntro = {
  children: React.ReactNode;
  addClass: string;
  imgAlt: string;
};

export const SectionIntro = ({ children, addClass, imgAlt }: TSectionIntro) => {
  return (
    <section className={`${classes.section} ${classes['section--dark']}`}>
      <div
        className={`${classes['section--dark__body']} ${classes.intro} ${addClass}`}
      >
        {children}
      </div>
      <StripedBg className={classes['striped-bg']} />
      <picture>
        <source srcSet="img/steam_ejector.avif" type="image/avif" />
        <img
          className={classes['ejector-img']}
          src="img/steam_ejector.png"
          width="520"
          height="412"
          alt={imgAlt}
        />
      </picture>
    </section>
  );
};
