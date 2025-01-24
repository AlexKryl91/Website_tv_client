import 'server-only';

type TLocale = {
  [key: string]: string;
};

export const getLocale = async (filename: string, lang: 'ru' | 'en') =>
  import(`@/locales/${filename}_${lang}.json`).then((module) => module.default);
