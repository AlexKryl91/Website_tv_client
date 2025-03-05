'use client';

import { TNavMenuItem } from '@/types/types';
import classes from './ItemGroup.module.scss';
import Chevron from '@icons/chevron.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type TSideMenuItem = {
  onClick: () => void;
};

const ItemGroup = ({ lang, item, onClick }: TNavMenuItem & TSideMenuItem) => {
  const pathname = usePathname();

  function styleGroup(content: { href: string }[]) {
    const routeHasPath = content.some(({ href }) => pathname.includes(href));
    return `${classes.group} ${routeHasPath ? classes['group--current'] : ''}`;
  }

  function styleLink(path: string) {
    return `${classes.link} ${
      pathname.includes(path) ? classes['link--current'] : ''
    }`;
  }

  return (
    <details name="menu-group" className={classes['menu-details']}>
      <summary className={styleGroup(item.content)}>
        {item.title}
        <Chevron className={classes.chevron} />
      </summary>
      <ul>
        {item.content.map((link) => (
          <li key={link.label}>
            <Link
              onClick={onClick}
              className={styleLink(link.href)}
              href={`/${lang}${link.href}`}
              aria-label={link.aria_label}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
};

export default ItemGroup;
