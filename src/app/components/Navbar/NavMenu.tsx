'use client';

import classes from './NavMenu.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TLocaleSet, TNavigationJSON } from '@/types/types';
import Chevron from '@/assets/icons/chevron.svg';

type TComponent = {
  lang: TLocaleSet;
  content: TNavigationJSON;
};

const NavMenu = ({ lang, content }: TComponent) => {
  const pathname = usePathname();

  function newPath(linkPath: string): string {
    const prefix = pathname === '/' ? '' : `/${lang}`;
    return `${prefix}${linkPath}`;
  }

  return (
    <nav>
      <ul
        className={classes.menubar}
        role="menubar"
        aria-label={content.menu_aria_label}
      >
        {content.menu.map((item) => (
          <li key={item.title} className={classes['menubar__item']} role="none">
            {item.title}
            <Chevron className={classes.chevron} />
            <ul className={classes.dropdown}>
              {item.content.map((link) => (
                <li key={link.name} className={classes['dropdown__item']}>
                  <Link
                    href={newPath(link.path)}
                    className={classes['dropdown__link']}
                    role="menuitem"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
