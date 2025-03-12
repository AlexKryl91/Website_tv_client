import dynamic from 'next/dynamic';

const LazyNavMenu = dynamic(() => import('./NavMenu'));

export default LazyNavMenu;
