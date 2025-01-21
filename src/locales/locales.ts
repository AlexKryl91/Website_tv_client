import 'server-only';

/* eslint-disable */
const locales: any = {
  ru: () => import('./ru.json').then((module) => module.default),
  en: () => import('./en.json').then((module) => module.default),
};
/* eslint-enable */

export const getLocales = async (locale: string) => locales[locale]();
