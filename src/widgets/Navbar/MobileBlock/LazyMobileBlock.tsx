import dynamic from 'next/dynamic';

const LazyMobileBlock = dynamic(() => import('./MobileBlock'));

export default LazyMobileBlock;
