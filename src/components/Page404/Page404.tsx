// import { TLangSet } from '@/types/types';
import classes from './Page404.module.scss';
import { roboto } from '@utils/fonts';

// type TPage404 = {
//   lang: TLangSet;
// };

// const TEXT_CONTENT = {
//   ru: {
//     header: 'Страница ошибки. 404 - страница не найдена',
//     msg: 'Ой! Страница не найдена',
//     text: 'Извините, страница, которую вы ищете, не существует',
//   },
//   en: {
//     header: 'Error page. 404 - Page not found',
//     msg: 'Oops! Page not found',
//     text: "Sorry, the page you're looking for doesn't exist",
//   },
// };

const Page404 = () => {
  return (
    <div className={`${classes.container} ${roboto.className}`}>
      <h1 className="sr-only">Error page. 404 - Page not found</h1>
      <p className={classes.code}>404</p>
      <h2 className={classes.msg}>Oops! Page not found</h2>
      <p className={classes.text}>
        Sorry, the page you&apos;re looking for doesn&apos;t exist
      </p>
    </div>
  );
};

export default Page404;
