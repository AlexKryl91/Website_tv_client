'use client';

import classes from './MobileBlock.module.scss';
import { TNavMenu } from '@/types/types';
import { useState } from 'react';
import BurgerButton from './BurgerButton';
import Link from 'next/link';
import ItemGroup from './ItemGroup';
import MobileLangSwitcher from './MobileLangSwitcher';

const MobileBlock = ({ lang, content }: TNavMenu) => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const menuStyle = `${classes['side-menu']} ${
    isMenuActive ? classes.show : ''
  }`;

  const coverStyle = `${classes['blur-cover']} ${
    isMenuActive ? classes.appear : ''
  }`;

  document.body.classList.toggle('scrollbar--hidden', isMenuActive);

  const burgerClick = () => setIsMenuActive(!isMenuActive);
  const linkClick = () => setIsMenuActive(false);

  return (
    <>
      <div className={coverStyle}></div>
      <ul className={menuStyle}>
        <li className={classes['top-item']}>
          <Link
            onClick={linkClick}
            className={classes['home-btn']}
            href={`/${lang}`}
            aria-label={content.logo.aria_label}
          ></Link>
        </li>
        {content.menu.map((item) => (
          <ItemGroup
            key={item.title}
            onClick={linkClick}
            lang={lang}
            item={item}
          />
        ))}
        <li className={classes['lang-item']}>
          <MobileLangSwitcher lang={lang} titles={content.lang_titles} />
        </li>
        <li className={classes['login-item']}>
          <button
            className={classes['login-btn']}
            type="button"
            title={content.login_btn.desc}
          >
            {content.login_btn.value}
          </button>
        </li>
      </ul>
      <BurgerButton
        onClick={burgerClick}
        title={content.menu_aria_label}
        isOpen={isMenuActive}
      />
    </>
  );
};

export default MobileBlock;
