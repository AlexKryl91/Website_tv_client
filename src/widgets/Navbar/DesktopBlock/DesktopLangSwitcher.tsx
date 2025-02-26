'use client';

import { TLangSet } from '@/types/types';
import classes from './DesktopLangSwitcher.module.scss';
import LangSwitcher from '../LangSwitcher';

type TSwitcher = {
  lang: TLangSet;
  titles: { [key: string]: string };
};

const DesktopLangSwitcher = ({ lang, titles }: TSwitcher) => {
  return (
    <LangSwitcher lang={lang} titles={titles} classes={classes}></LangSwitcher>
  );
};

export default DesktopLangSwitcher;
