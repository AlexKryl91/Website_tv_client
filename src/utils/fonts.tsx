import localFont from 'next/font/local';

export const roboto = localFont({
  src: [
    {
      path: '../../public/fonts/Roboto-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Roboto-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Roboto-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Roboto-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Roboto-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  fallback: ['arial', 'sans-serif'],
  preload: true,
});

export const montserrat = localFont({
  src: '../../public/fonts/Montserrat-Medium.woff2',
  weight: '500',
  style: 'normal',
  fallback: ['arial', 'sans-serif'],
});
