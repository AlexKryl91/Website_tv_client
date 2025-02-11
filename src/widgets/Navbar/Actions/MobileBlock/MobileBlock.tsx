'use client';

import classes from './MobileBlock.module.scss';
import { TNavMenu } from '@/types/types';
import { useState } from 'react';
import BurgerButton from './BurgerButton';
import Link from 'next/link';
// import { usePathname } from 'next/navigation';

const MobileBlock = ({ lang, content }: TNavMenu) => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const menuStyle = `${classes['side-menu']} ${
    isMenuActive ? classes.show : ''
  }`;

  const coverStyle = `${classes['blur-cover']} ${
    isMenuActive ? classes.appear : ''
  }`;

  document.body.classList.toggle('scrollbar--hidden', isMenuActive);

  //  const pathname = usePathname();

  // function styleItem(content: { href: string }[]) {
  //   const routeHasPath = content.some(({ href }) => pathname.includes(href));
  //   return `${classes['menubar__item']} ${routeHasPath ? classes.active : ''}`;
  // }

  // function styleLink(path: string) {
  //   return `${classes['dropdown__link']} ${
  //     pathname.includes(path) ? classes.current : ''
  //   }`;
  // }

  return (
    <>
      <div className={coverStyle}></div>
      <ul className={menuStyle}>
        {content.menu.map((item) => (
          <li key={item.title} className={classes.group}>
            <span>{item.title}</span>
            <ul className={classes.submenu}>
              {item.content.map((link) => (
                <li key={link.label}>
                  <Link
                    onClick={() => setIsMenuActive(false)}
                    href={`/${lang}${link.href}`}
                    className={classes.link}
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
