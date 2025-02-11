import classes from './Navigation.module.scss';
import Link from 'next/link';
import { TNavMenu } from '@/types/types';

const Navigation = ({ lang, content }: TNavMenu) => {
  return (
    <nav className={classes.navigation}>
      <ul>
        {content.menu.map((item) => (
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
            title={content.login_btn.desc}
          >
            {content.login_btn.value}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
