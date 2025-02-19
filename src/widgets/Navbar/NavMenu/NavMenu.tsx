'use client';

import classes from './NavMenu.module.scss';
import { TNavMenu } from '@/types/types';
import NavMenuItem from './NavMenuItem';
import useWidth from '@/hooks/useWidth';

const NavMenu = ({ lang, content }: TNavMenu) => {
  const windowWidth = useWidth();
  const isDesktop = windowWidth ? windowWidth > 1024 : true;

  const navMenu = (
    <nav>
      <ul className={classes.menubar} aria-label={content.menu_aria_label}>
        {content.menu.map((item) => (
          <NavMenuItem key={item.title} item={item} lang={lang} />
        ))}
      </ul>
    </nav>
  );

  return isDesktop && navMenu;
};

export default NavMenu;
