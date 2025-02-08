import 'server-only';

const getLocale = async (filename: string, lang: 'ru' | 'en') =>
  import(`@/locales/${filename}_${lang}.json`).then((module) => module.default);

export default getLocale;
