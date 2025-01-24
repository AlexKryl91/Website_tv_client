export type TLangSet = 'ru' | 'en';

export type TRootProps = {
  children: React.ReactNode;
  params: Promise<{ lang: TLangSet }>;
};

export type TPageProps = {
  params: Promise<{ lang: TLangSet }>;
};

export type TComponentProps = {
  children?: React.ReactNode;
  lang: TLangSet;
};

export type TNavigationJSON = {
  logo: { alt: string };
  menu: {
    title: string;
    content: { label: string; href: string }[];
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

export type THomepageJSON = {
  banner: {
    header: string;
    img_alt: string;
    tagline: string[];
    profile: string;
  };
  advantage: {
    header: string;
    img1_alt: string;
    mark1: string;
    img2_alt: string;
    mark2: string;
    adv1: string;
    adv2: string;
    adv3: string;
    link_btn: string;
  };
  offer: {
    header: string;
    list: {
      id: string;
      img_alt: string;
      description: string;
    }[];
    link_btn: string;
  };
  clients: {
    header: string;
  };
  join: {
    header: string;
    text: string;
    link_btn_careers: string;
    link_btn_contacts: string;
  };
  feedback: {
    header: string;
    feedback_text: string;
    input_name: string;
    input_company: string;
    imput_tel: string;
    input_email: string;
    input_msg: string;
    submit_btn: string;
    callin_text: string;
    callin_link: string;
  };
};
