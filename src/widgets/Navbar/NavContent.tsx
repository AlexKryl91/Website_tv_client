'use client';

import dynamic from 'next/dynamic';
import { TNavMenu } from '@/types/types';
import useWidth from '@/hooks/useWidth';
import { usePathname } from 'next/navigation';

const MobileBlock = dynamic(() => import('./MobileBlock/MobileBlock'));
const DesktopBlock = dynamic(() => import('./DesktopBlock/DesktopBlock'));
const NavMenu = dynamic(() => import('./NavMenu/NavMenu'));

type TDeviceType = {
  isTouch: boolean;
};

const NavContent = ({ lang, content, isTouch }: TNavMenu & TDeviceType) => {
  const windowWidth = useWidth();
  const pathname = usePathname();

  let isMobile = false;

  if (isTouch) {
    isMobile = isTouch;
  } else {
    isMobile = windowWidth ? windowWidth <= 1024 : isTouch;
  }

  return (
    <>
      {!isMobile && <NavMenu lang={lang} content={content} />}
      {isMobile ? (
        <MobileBlock key={pathname} lang={lang} content={content} />
      ) : (
        <DesktopBlock lang={lang} content={content} />
      )}
    </>
  );
};

export default NavContent;
