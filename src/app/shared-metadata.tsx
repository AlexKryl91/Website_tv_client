const ogImgOpt = {
  url: '/img/og_1200x630.jpeg',
  width: 1200,
  height: 630,
  type: 'image/jpeg',
};

export const openGraphShared = {
  ru: {
    type: 'website',
    site_name: 'ООО Техновакуум. Разработка и производтсво струйной техники',
    images: [
      {
        ...ogImgOpt,
        alt: 'Баннер ООО Техновакуум',
      },
    ],
  },
  en: {
    type: 'website',
    site_name: 'Technovacuum LLC. Jet devices development and production',
    images: [
      {
        ...ogImgOpt,
        alt: 'Technovacuum LLC banner',
      },
    ],
  },
};

export const copyright = {
  ru: 'ООО Техновакуум',
  en: 'Technovacuum LLC',
};
