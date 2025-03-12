import dynamic from 'next/dynamic';

const LazyDesktopBlock = dynamic(() => import('./DesktopBlock'));

export default LazyDesktopBlock;
