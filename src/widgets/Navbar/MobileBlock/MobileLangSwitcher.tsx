'use client';

import { TLangSet } from '@/types/types';
import classes from './MobileLangSwitcher.module.scss';
import LangSwitcher from '../LangSwitcher';

type TSwitcher = {
  lang: TLangSet;
  titles: { [key: string]: string };
};

const MobileLangSwitcher = ({ lang, titles }: TSwitcher) => {
  return (
    <LangSwitcher lang={lang} titles={titles} classes={classes}></LangSwitcher>
  );
};

export default MobileLangSwitcher;
