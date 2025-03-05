'use client';

import classes from './MobileBlock.module.scss';
import { TNavMenu } from '@/types/types';
import { useState } from 'react';
import BurgerButton from './BurgerButton';
import Link from 'next/link';
import ItemGroup from './ItemGroup';
import MobileLangSwitcher from './MobileLangSwitcher';

const MobileBlock = ({ lang, content }: TNavMenu) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const menuStyle = `${classes['side-menu']} ${isActive ? classes.show : ''}`;

  const coverStyle = `${classes['blur-cover']} ${
    isActive ? classes.appear : ''
  }`;

  if (typeof window !== 'undefined') {
    document.body.classList.toggle('scrollbar--hidden', isActive);
  }

  const burgerClick = () => setIsActive(!isActive);
  const linkClick = () => setIsActive(false);

  return (
    <>
      <div className={coverStyle}></div>
      <div className={menuStyle}>
        <div className={classes['top-item']}>
          <Link
            onClick={linkClick}
            className={classes['home-btn']}
            href={`/${lang}`}
            aria-label={content.logo.aria_label}
          ></Link>
        </div>

        {content.menu.map((item) => (
          <ItemGroup
            key={item.title}
            onClick={linkClick}
            lang={lang}
            item={item}
          />
        ))}

        <MobileLangSwitcher lang={lang} titles={content.lang_titles} />

        <button
          className={classes['login-btn']}
          type="button"
          title={content.login_btn.desc}
        >
          {content.login_btn.value}
        </button>
      </div>

      <BurgerButton
        onClick={burgerClick}
        title={content.menu_aria_label}
        isOpen={isActive}
      />
    </>
  );
};

export default MobileBlock;
