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
    location: StaticRangeInit;
    address: string[];
    telephone: string[];
    email: string;
  };
  credits: {
    text: string;
    refs: {
      label: string;
      href: string;
    }[];
  }[];
  up_btn_title: string;
};

export type TNavMenu = {
  lang: TLangSet;
  content: TNavigationJSON;
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
