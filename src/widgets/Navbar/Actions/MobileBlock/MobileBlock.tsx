'use client';

import classes from './MobileBlock.module.scss';
import { TNavMenu } from '@/types/types';
import { useState } from 'react';
import BurgerButton from './BurgerButton';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MobileBlock = ({ lang, content }: TNavMenu) => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const menuStyle = `${classes['side-menu']} ${
    isMenuActive ? classes.show : ''
  }`;

  const coverStyle = `${classes['blur-cover']} ${
    isMenuActive ? classes.appear : ''
  }`;

  document.body.classList.toggle('scrollbar--hidden', isMenuActive);

  const pathname = usePathname();

  function styleGroup(content: { href: string }[]) {
    const routeHasPath = content.some(({ href }) => pathname.includes(href));
    return `${classes.group} ${routeHasPath ? classes.active : ''}`;
  }

  function styleLink(path: string) {
    return `${classes.link} ${pathname.includes(path) ? classes.current : ''}`;
  }

  return (
    <>
      <div className={coverStyle}></div>
      <ul className={menuStyle}>
        <li className={classes['top-item']}>
          <Link
            onClick={() => setIsMenuActive(false)}
            className={classes['home-btn']}
            href={`/${lang}`}
            aria-label={content.logo.alt}
            role="menuitem"
          ></Link>
        </li>
        {content.menu.map((item) => (
          <li key={item.title} className={styleGroup(item.content)}>
            <span>{item.title}</span>
            <ul className={classes.submenu}>
              {item.content.map((link) => (
                <li key={link.label}>
                  <Link
                    onClick={() => setIsMenuActive(false)}
                    className={styleLink(link.href)}
                    href={`/${lang}${link.href}`}
                    role="menuitem"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <BurgerButton
        onClick={() => setIsMenuActive(!isMenuActive)}
        title={content.menu_aria_label}
        isOpen={isMenuActive}
      />
    </>
  );
};

export default MobileBlock;

{
  /* 
        <ul class="burger-menu">
          <li class="burger-menu__item">
            <a href="#exp" class="burger-menu__item__link">
              Обо мне
            </a>
          </li>
          <li class="burger-menu__item">
            <a href="#spec" class="burger-menu__item__link">
              Специализация
            </a>
          </li>
          <li class="burger-menu__item">
            <a href="#contacts" class="burger-menu__item__link">
              Контакты
            </a>
          </li>
          <li class="burger-menu__item">
            <a href="tel:+7-902-167-43-46" class="burger-menu__item__link tel">
              +7 (902) 167-43-46
            </a>
          </li>
        </ul>
      */
}
