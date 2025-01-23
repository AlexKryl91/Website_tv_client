export type TLocaleSet = 'ru' | 'en';

export type TRootProps = {
  children: React.ReactNode;
  params: Promise<{ lang: TLocaleSet }>;
};

export type TPageProps = {
  params: Promise<{ lang: TLocaleSet }>;
};

export type TComponentProps = {
  children?: React.ReactNode;
  lang: TLocaleSet;
};

export type TNavigationJSON = {
  logo: { alt: string };
  menu: {
    title: string;
    content: { name: string; path: string }[];
  }[];
  menu_aria_label: string;
  lang_titles: { ru: string; en: string };
  login_btn: { value: string; desc: string };
  info: {
    organization: string;
    address: string[];
    telephone: string[];
    email: string;
  };
  dev: string;
};
