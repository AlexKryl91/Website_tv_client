export type TLangSet = 'ru' | 'en';

export type TLayoutProps = {
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
    taglines: string[];
    profile: string;
  };
  advantage: {
    header: string;
    collage: {
      img_alt: string;
      number: string;
      text: string;
    }[];
    adv_list: string[];
    link_label: string;
  };
  offer: {
    header: string;
    list: {
      img_alt: string;
      text: string;
    }[];
    link_label: string;
  };
  clients: {
    header: string;
    cards: {
      id: string;
      name: string;
      href: string;
    }[];
  };
  join: {
    header: string;
    text: string;
    link_labels: string[];
  };
  feedback: {
    header: string;
    feedback_text: string;
    feedback_form: {
      placeholder_name: string;
      placeholder_company: string;
      placeholder_tel: string;
      placeholder_email: string;
      placeholder_msg: string;
      submit_label: string;
    };
    call_text: string;
    link_label: string;
  };
};
