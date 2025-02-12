'use client';

import { TNavMenu } from '@/types/types';
import dynamic from 'next/dynamic';
import useSize from '@/hooks/useSize';

const MobileBlock = dynamic(() => import('./MobileBlock/MobileBlock'));
const DesktopBlock = dynamic(() => import('./DesktopBlock/DesktopBlock'));

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
