'use client';

import classes from './DesktopBlock.module.scss';
import { TNavMenu } from '@/types/types';
import DesktopLangSwitcher from './DesktopLangSwitcher';

const DesktopBlock = ({ lang, content }: TNavMenu) => {
  return (
    <div className={classes.actions}>
      <DesktopLangSwitcher lang={lang} titles={content.lang_titles} />
      <button
        className={classes['login-btn']}
        type="button"
        title={content.login_btn.desc}
      >
        {content.login_btn.value}
      </button>
    </div>
  );
};

export default DesktopBlock;
