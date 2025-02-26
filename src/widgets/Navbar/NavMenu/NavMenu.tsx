import classes from './NavMenu.module.scss';
import { TNavMenu } from '@/types/types';
import NavMenuItem from './NavMenuItem';

const NavMenu = ({ lang, content }: TNavMenu) => {
  return (
    <nav>
      <ul className={classes.menubar} aria-label={content.menu_aria_label}>
        {content.menu.map((item) => (
          <NavMenuItem key={item.title} item={item} lang={lang} />
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
