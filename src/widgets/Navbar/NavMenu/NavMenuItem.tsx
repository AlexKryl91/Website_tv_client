import classes from './NavMenuItem.module.scss';
import Link from 'next/link';
import Chevron from '@icons/chevron.svg';
import { TNavMenuItem } from '@/types/types';
import { usePathname } from 'next/navigation';

const NavMenuItem = ({ item, lang }: TNavMenuItem) => {
  const pathname = usePathname();

  function styleItem(content: { href: string }[]) {
    const routeHasPath = content.some(({ href }) => pathname.includes(href));
    return `${classes['menubar__item']} ${
      routeHasPath ? classes['menubar__item--active'] : ''
    }`;
  }

  function styleLink(path: string) {
    return `${classes['dropdown__link']} ${
      pathname.includes(path) ? classes['dropdown__link--current'] : ''
    }`;
  }

  return (
    <li className={styleItem(item.content)}>
      {item.title}
      <Chevron />
      <ul className={classes.dropdown}>
        {item.content.map((link) => (
          <li key={link.label} className={classes['dropdown__item']}>
            <Link
              href={`/${lang}${link.href}`}
              className={styleLink(link.href)}
              aria-label={link.aria_label}
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
