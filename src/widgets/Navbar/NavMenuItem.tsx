import classes from './NavMenuItem.module.scss';
import Link from 'next/link';
import Chevron from '@/assets/icons/chevron.svg';
import { TLangSet } from '@/types/types';

type TMenuItem = {
  item: {
    title: string;
    content: {
      label: string;
      href: string;
    }[];
  };
  pathname: string;
  lang: TLangSet;
};

const NavMenuItem = ({ item, pathname, lang }: TMenuItem) => {
  function styleItem(content: { href: string }[]) {
    const routeHasPath = content.some(({ href }) => pathname.includes(href));
    return `${classes['menubar__item']} ${routeHasPath ? classes.active : ''}`;
  }

  function styleLink(path: string) {
    return `${classes['dropdown__link']} ${
      pathname.includes(path) ? classes.current : ''
    }`;
  }

  return (
    <li className={styleItem(item.content)} role="none">
      {item.title}
      <Chevron className={classes.chevron} />
      <ul className={classes.dropdown}>
        {item.content.map((link) => (
          <li key={link.label} className={classes['dropdown__item']}>
            <Link
              href={`/${lang}${link.href}`}
              className={styleLink(link.href)}
              role="menuitem"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default NavMenuItem;
