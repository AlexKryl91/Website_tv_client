'use client';

import { TNavMenuItem } from '@/types/types';
import classes from './ItemGroup.module.scss';
import Chevron from '@icons/chevron.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

type TSideMenuItem = {
  onClick: () => void;
};

const ItemGroup = ({ lang, item, onClick }: TNavMenuItem & TSideMenuItem) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  function openSubmenu() {
    setIsOpen(!isOpen);
  }

  const styleChevron = `${classes.chevron} ${
    isOpen ? classes['chevron--open'] : ''
  }`;
  const styleSubmenu = `${classes.submenu} ${
    isOpen ? classes['submenu--open'] : ''
  }`;

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
    <li key={item.title}>
      <button
        onClick={openSubmenu}
        type="button"
        className={styleGroup(item.content)}
      >
        {item.title}
        <Chevron className={styleChevron} />
      </button>
      <ul className={styleSubmenu}>
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
    </li>
  );
};

export default ItemGroup;
