'use client';

import { TNavMenu } from '@/types/types';
import dynamic from 'next/dynamic';
import useWidth from '@/hooks/useWidth';

const MobileBlock = dynamic(() => import('./MobileBlock/MobileBlock'));
const DesktopBlock = dynamic(() => import('./DesktopBlock/DesktopBlock'));

const Actions = ({ lang, content }: TNavMenu) => {
  const windowWidth = useWidth();
  const isMobile = windowWidth === 0 ? false : windowWidth <= 1024;

  return isMobile ? (
    <MobileBlock lang={lang} content={content} />
  ) : (
    <DesktopBlock lang={lang} content={content} />
  );
};

export default Actions;
