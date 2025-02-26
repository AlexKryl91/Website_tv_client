import 'server-only';

const getTranslation = async (filename: string, lang: 'ru' | 'en') =>
  import(`@/locales/${filename}_${lang}.json`).then((module) => module.default);

export default getTranslation;
