'use client';

import useWidth from '@/hooks/useWidth';
import classes from './Decoration.module.scss';
import StripedBg from '@img/striped_bg_animated.svg';

type TDecoration = {
  imgAlt: string;
  isMobile: boolean;
};

const Decoration = ({ imgAlt, isMobile }: TDecoration) => {
  const windowWidth = useWidth();
  const showBG = windowWidth ? windowWidth > 624 : !isMobile;
  const showEjector = windowWidth ? windowWidth >= 960 : !isMobile;

  return (
    <>
      {showBG && <StripedBg className={classes['striped-bg']} />}
      {showEjector && (
        <picture>
          <source srcSet="/img/steam_ejector.avif" type="image/avif" />
          <img
            className={classes['ejector-img']}
            src="/img/steam_ejector.png"
            width="520"
            height="412"
            alt={imgAlt}
          />
        </picture>
      )}
    </>
  );
};

export default Decoration;
