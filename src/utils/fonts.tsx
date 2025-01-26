import localFont from 'next/font/local';

const roboto = localFont({
  src: [
    {
      path: '../assets/fonts/Roboto-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Roboto-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Roboto-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Roboto-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Roboto-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  fallback: ['arial', 'sans-serif'],
});

const montserrat = localFont({
  src: '../assets/fonts/Montserrat-Medium.woff2',
  weight: '500',
  style: 'normal',
  fallback: ['arial', 'sans-serif'],
});

export { roboto, montserrat };
