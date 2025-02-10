import classes from './Navigation.module.scss';
import Link from 'next/link';
import { TLangSet, TNavigationJSON } from '@/types/types';

type TNavigation = {
  lang: TLangSet;
  text: TNavigationJSON;
};

const Navigation = ({ lang, text }: TNavigation) => {
  return (
    <nav className={classes.navigation}>
      <ul>
        {text.menu.map((item) => (
          <li key={item.title}>
            <span>{item.title}</span>
            <ul className={classes['nav-group']}>
              {item.content.map((link) => (
                <li key={link.label}>
                  <Link href={`/${lang}${link.href}`}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
        <li>
          <button
            className={classes['login-btn']}
            type="button"
            title={text.login_btn.desc}
          >
            {text.login_btn.value}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
