import { TLangSet } from '@/types/types';
import useSwitchLocale from '@/hooks/useSwitchLocale';

type TSwitcher = {
  lang: TLangSet;
  titles: { [key: string]: string };
  classes: { readonly [key: string]: string };
};

const LangSwitcher = ({ lang, titles, classes }: TSwitcher) => {
  const switchLocale = useSwitchLocale(lang);

  function styleBtn(isActive: boolean) {
    return `${classes['lang-btn']} ${
      isActive ? classes['lang-btn--active'] : ''
    }`;
  }

  return (
    <div className={classes.switcher}>
      {Object.keys(titles).map((locale) => (
        <button
          key={locale}
          onClick={() => switchLocale(locale)}
          className={styleBtn(lang !== locale)}
          title={titles[locale]}
        >
          {locale}
        </button>
      ))}
    </div>
  );
};

export default LangSwitcher;
