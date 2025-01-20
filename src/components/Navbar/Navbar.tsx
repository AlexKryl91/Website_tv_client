import Link from 'next/link';
import Image from 'next/image';
import classes from './Navbar.module.scss';
import chevronSVG from '@/assets/img/chevron.svg';

// console.log(chevronSVG)

const Navbar = () => {
  return (
    <header className={classes.navbar}>
      <Link href="/" className={classes.logo}>
        <Image
          src="/icons/logo_large_ru.svg"
          alt="Логотип компании"
          width={265}
          height={32}
        />
      </Link>
      <nav aria-label="">
        <ul className={classes.menubar} role="menubar" aria-label="">
          <li role="none">
            <Link className={classes['menubar__item']} href="/" role="menuitem">
              ITEM 1
              {/* <Image
                src="/icons/chevron.svg"
                alt="Логотип компании"
                width={265}
                height={32}
              /> */}
            </Link>
          </li>
          <li role="none">
            <Link className={classes['menubar__item']} href="/" role="menuitem">
              ITEM 2
            </Link>
          </li>
          <li role="none">
            <Link className={classes['menubar__item']} href="/" role="menuitem">
              ITEM 3
            </Link>
          </li>
        </ul>
      </nav>
      <div>LangSwitcher</div>
      <button>LOGIN</button>

      {/* <nav class="menu">
        <div class="logo">
          <img
            class="logo__img"
            src="/img/logo.svg"
            alt="Логотип адвокада"
            width="54"
            height="60"
          />
          <div class="logo__text">
            <div class="logo__text__main">Вторушин Сергей</div>
            <div class="logo__text__sub">Адвокат</div>
          </div>
        </div>
        <ul class="menu__list">
          <li class="menu__list__item">
            <a href="#exp" class="menu__list__link">
              Обо мне
            </a>
          </li>
          <li class="menu__list__item">
            <a href="#spec" class="menu__list__link">
              Специализация
            </a>
          </li>
          <li class="menu__list__item">
            <a href="#contacts" class="menu__list__link">
              Контакты
            </a>
          </li>
        </ul>
        <a href="tel:+7-902-167-43-46" class="menu__tel">
          +7 (902) 167-43-46
        </a>
        <button class="burger-btn" type="button" title="Меню">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span class="visually-hidden">Меню</span>
        </button>
        <ul class="burger-menu">
          <li class="burger-menu__item">
            <a href="#exp" class="burger-menu__item__link">
              Обо мне
            </a>
          </li>
          <li class="burger-menu__item">
            <a href="#spec" class="burger-menu__item__link">
              Специализация
            </a>
          </li>
          <li class="burger-menu__item">
            <a href="#contacts" class="burger-menu__item__link">
              Контакты
            </a>
          </li>
          <li class="burger-menu__item">
            <a href="tel:+7-902-167-43-46" class="burger-menu__item__link tel">
              +7 (902) 167-43-46
            </a>
          </li>
        </ul>
      </nav> */}
    </header>
  );
};

export default Navbar;
