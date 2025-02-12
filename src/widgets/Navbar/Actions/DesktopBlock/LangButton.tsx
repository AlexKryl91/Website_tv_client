'use client';

import classes from './LangButton.module.scss';
import { TLangSwitchBtn } from '@/types/types';

const LangButton = ({ isActive, title, label, onClick }: TLangSwitchBtn) => {
  const style = `${classes['lang-btn']} ${
    isActive ? classes['lang-btn--active'] : ''
  }`;

  return (
    <button onClick={onClick} className={style} title={title}>
      {label}
    </button>
  );
};

export default LangButton;
