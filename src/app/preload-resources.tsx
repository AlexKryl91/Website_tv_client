'use client';

import ReactDOM from 'react-dom';

export function PreloadResources() {
  ReactDOM.preload('/img/homepage_bg_1.avif', {
    as: 'image',
    type: 'image/avif',
  });

  return '/img/homepage_bg_1.avif';
}
