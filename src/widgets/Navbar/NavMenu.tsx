'use client';

import classes from './NavMenu.module.scss';
import { usePathname } from 'next/navigation';
import { TLangSet, TNavigationJSON } from '@/types/types';
import NavMenuItem from './NavMenuItem';

type TComponent = {
  lang: TLangSet;
  content: TNavigationJSON;
};

const NavMenu = ({ lang, content }: TComponent) => {
  const pathname = usePathname();

  return (
    <nav>
      <ul
        className={classes.menubar}
        role="menubar"
        aria-label={content.menu_aria_label}
      >
        {content.menu.map((item) => (
          <NavMenuItem
            key={item.title}
            item={item}
            pathname={pathname}
            lang={lang}
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
