'use client';

import classes from './MobileLangButton.module.scss';
import { TLangSwitchBtn } from '@/types/types';

const MobileLangButton = ({ isActive, title, label, onClick }: TLangSwitchBtn) => {
  const style = `${classes['lang-btn']} ${
    isActive ? classes['lang-btn--active'] : ''
  }`;

  return (
    <button onClick={onClick} className={style} title={title}>
      {label}
    </button>
  );
};

export default MobileLangButton;
