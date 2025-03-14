// Language types

export type TLangSet = 'ru' | 'en';

export type TLangSwitchBtn = {
  isActive: boolean;
  title: string;
  label: string;
  onClick: () => void;
};

// Common types

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

// JSON Pages Content types

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

export type TMetadata = {
  title: string;
  description: string;
  keywords: string;
};

export type THomepageJSON = {
  metadata: TMetadata;
  page_header: string;
  banner: {
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

export type TUnitJSON = {
  img: string;
  img_alt: string;
  title: string;
  description: {
    strong: string;
    text: string;
    endline?: string;
    endline_strong?: string;
  };
  slides: TDiagramSlide[];
  operation: {
    header: string;
    paragraphs: string[];
  }[];
  features: {
    title: string;
    list: string[];
  }[];
  state_btn: { open: string; close: string };
};

export type TSolutionsJSON = {
  metadata: TMetadata;
  page_header: string;
  header: string;
  systems: {
    title: string;
    text: string;
    units: TUnitJSON[];
  }[];
  common: {
    summary: string[];
    slider_btn: {
      prev: string;
      next: string;
    };
  };
};

export type TProductsJSON = {
  metadata: TMetadata;
  page_header: string;
  products: {
    header: string;
    main: {
      title: string;
      img_alt: string[];
      text: string[];
    };
    additional: {
      title: string;
      img_alt: string;
      pargraph_and_link: {
        start: string;
        end: string;
        link: {
          label: string;
          href: string;
          aria_label: string;
        };
      };
      paragraph: string;
    }[];
  };
  services: {
    header: string;
    text: string[];
    list_title: string;
    list: string[];
  };
  advert: {
    text: string;
    link: {
      label: string;
      href: string;
      aria_label: string;
    };
  };
};

export type TAboutJSON = {
  metadata: TMetadata;
  page_header: string;
  header: string;
  general: {
    annotation: string;
    paragraph: string;
    pargraph_and_link: {
      start: string;
      end: string;
      link: {
        label: string;
        href: string;
        aria_label: string;
      };
    };
  };
  mstu: {
    img_alt: string;
    pargraph_and_link: {
      start: string;
      end: string;
      link: {
        label: string;
        href: string;
        aria_label: string;
      };
    };
    paragraph: string;
  };
  founder: {
    img_alt: string;
    title: string;
    name: string;
    position: string;
    desc: string;
  };
  patents: {
    img: string;
    img_alt: string;
  }[];
  guarantee: string;
};

// Components types

export type TDiagramSlide = {
  filename: string;
  img_alt: string;
  caption: string;
  list_1: string[];
  list_2: string[];
};

// Modal components types

export type TPatentCard = {
  patent: TAboutJSON['patents'][number];
};

export type TSlideItem = {
  slide: TDiagramSlide;
};

export type TModalCompProps = TPatentCard & TSlideItem;
