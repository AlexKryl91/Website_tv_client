'use client';

import classes from './NavMenu.module.scss';
import { TNavMenu } from '@/types/types';
import NavMenuItem from './NavMenuItem';
import useSize from '@/hooks/useSize';

const NavMenu = ({ lang, content }: TNavMenu) => {
  const windowWidth = useSize()[0];
  const isDesktop = windowWidth ? windowWidth > 1024 : true;

  const navMenu = (
    <nav>
      <ul
        className={classes.menubar}
        role="menubar"
        aria-label={content.menu_aria_label}
      >
        {content.menu.map((item) => (
          <NavMenuItem key={item.title} item={item} lang={lang} />
        ))}
      </ul>
    </nav>
  );

  return isDesktop && navMenu;
};

export default NavMenu;
