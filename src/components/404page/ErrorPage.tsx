import classes from './ErrorPage.module.scss';

const ErrorPage = () => {
  return (
    <div className={classes.container}>
      <p className={classes['code-number']}>404</p>
      <h1 className={classes['error-msg']}>Oops! Page not found</h1>
      <p className={classes.text}>
        Sorry, the page you&apos;re looking for doesn&apos;t exist.
      </p>
    </div>
  );
};

export default ErrorPage;
