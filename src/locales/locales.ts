import 'server-only';

// type TTranslationUnit = {
//   [key: string]: string;
// };

// interface ITranslations {
//   [key: string]: TTranslationUnit;
// }

// type TLocales = {
//   [key: string]: () => Promise<ITranslations>;
// };

/* eslint-disable */
const locales: any = {
  ru: () => import('./ru.json').then((module) => module.default),
  en: () => import('./en.json').then((module) => module.default),
};
/* eslint-enable */

export const getLocales = async (locale: string) => locales[locale]();
