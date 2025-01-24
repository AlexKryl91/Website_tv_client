'use client';

import classes from './LangButton.module.scss';

type TSwitcherBtn = {
  isActive: boolean;
  title: string;
  locale: string;
  clickHandler: () => void;
};

const LangButton = ({
  isActive,
  title,
  locale,
  clickHandler,
}: TSwitcherBtn) => {
  const style = `${classes['switch-btn']} ${isActive ? classes.active : ''}`;

  return (
    <div>
      <button onClick={clickHandler} className={style} title={title}>
        {locale}
      </button>
    </div>
  );
};

export default LangButton;
