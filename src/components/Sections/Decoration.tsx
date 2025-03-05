'use client';

import useWidth from '@/hooks/useWidth';
import classes from './Decoration.module.scss';
import StripedBg from '@img/striped_bg_animated.svg';

const Decoration = ({ imgAlt }: { imgAlt: string }) => {
  const windowWidth = useWidth();
  const showBG = windowWidth ? windowWidth > 624 : true;
  const showEjector = windowWidth ? windowWidth >= 960 : true;

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
