export type TLangSet = 'ru' | 'en';

export type TLangSwitchBtn = {
  isActive: boolean;
  title: string;
  label: string;
  onClick: () => void;
};

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

type TLink = { label: string; href: string; aria_label: string };

export type TNavigationJSON = {
  logo: { alt: string; aria_label: string };
  menu: {
    title: string;
    content: TLink[];
  }[];
  menu_aria_label: string;
  lang_titles: { ru: string; en: string };
  login_btn: { value: string; desc: string };
  info: {
    organization: string;
    location: string;
    loc_aria_label: string;
    address: string[];
    telephone: string[];
    email: string;
  };
  credits: {
    text: string;
    refs: {
      label: string;
      href: string;
      aria_label: string;
    }[];
  }[];
};

export type TNavMenu = {
  lang: TLangSet;
  content: TNavigationJSON;
};

export type TNavMenuItem = {
  item: {
    title: string;
    content: {
      label: string;
      href: string;
      aria_label: string;
    }[];
  };
  lang: TLangSet;
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
    adv_list: {
      text: string;
      href: string;
      aria_label: string;
    }[];
    link_label: string;
  };
  offer: {
    header: string;
    list: {
      img_alt: string;
      text: string;
      href: string;
      aria_label: string;
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
    links: TLink[];
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
    call_link: TLink;
  };
};

export type TSolutionsJSON = {
  page_header: string;
  header: string;
  systems: { strong: string; text: string }[];
  units: {
    title: string;
    desc: {
      strong: string;
      text: string;
    };
    slides: {
      id: number;
      img: string;
      img_alt: string;
      text: {
        caption: string;
        desc: {
          block1: string[];
          block2: string[];
        };
      };
    }[];
    operation: {
      title: string;
      blocks: string[];
    }[];
    features: {
      title: string;
      list: {
        id: string;
        item: string;
      }[];
    }[];
    btn_state: {
      open_state: string;
      close_state: string;
    };
    common: {
      summary: string[];
      expand_btn: {
        close_state: string;
        open_state: string;
      };
      slider_btn: {
        title_left: string;
        title_right: string;
      };
    };
  }[];
};
