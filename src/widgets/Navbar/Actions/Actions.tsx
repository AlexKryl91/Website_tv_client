'use client';

import { TNavMenu } from '@/types/types';
import useSize from '@/hooks/useSize';
import DesktopBlock from './DesktopBlock/DesktopBlock';
import MobileBlock from './MobileBlock/MobileBlock';

const Actions = ({ lang, content }: TNavMenu) => {
  const windowWidth = useSize()[0];
  const isMobile = windowWidth ? windowWidth <= 1024 : false;

  return isMobile ? (
    <MobileBlock lang={lang} content={content} />
  ) : (
    <DesktopBlock lang={lang} content={content} />
  );
};

export default Actions;
