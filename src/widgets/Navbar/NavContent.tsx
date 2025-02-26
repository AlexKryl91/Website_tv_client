'use client';

import dynamic from 'next/dynamic';
import { TNavMenu } from '@/types/types';
import useWidth from '@/hooks/useWidth';

const MobileBlock = dynamic(() => import('./MobileBlock/MobileBlock'));
const DesktopBlock = dynamic(() => import('./DesktopBlock/DesktopBlock'));
const NavMenu = dynamic(() => import('./NavMenu/NavMenu'));

const NavContent = ({ lang, content }: TNavMenu) => {
  const windowWidth = useWidth();
  const isMobile = windowWidth ? windowWidth <= 1024 : false;

  return (
    <>
      {!isMobile && <NavMenu lang={lang} content={content} />}
      {isMobile ? (
        <MobileBlock lang={lang} content={content} />
      ) : (
        <DesktopBlock lang={lang} content={content} />
      )}
    </>
  );
};

export default NavContent;
