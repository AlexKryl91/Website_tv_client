import Link from 'next/link';
import Image from 'next/image';
import classes from './Navbar.module.scss';
import { TComponentProps, TNavigationJSON } from '@/types/types';
import NavMenu from './NavMenu';
import LangSwitcher from '@/app/components/Navbar/LangSwitcher';

import localeRU from '@/locales/navigation_ru.json';
import localeEN from '@/locales/navigation_en.json';

const Navbar = ({ lang }: TComponentProps) => {
  const t: TNavigationJSON = lang === 'ru' ? localeRU : localeEN;

  return (
    <header className={classes.navbar}>
      <Link href={`/${lang}`} className={classes.logo} title={t.logo.alt}>
        <Image
          src={`/img/logo_large_${lang}.svg`}
          alt={t.logo.alt}
          width={265}
          height={32}
          priority
        />
      </Link>

      <NavMenu lang={lang} content={t} />
      <div className={classes.actions}>
        <LangSwitcher lang={lang} content={t} />
        <button
          className={classes['login-btn']}
          type="button"
          title={t.login_btn.desc}
        >
          {t.login_btn.value}
        </button>
      </div>

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
