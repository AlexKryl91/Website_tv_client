import classes from './Buttons.module.scss';
import Link from 'next/link';

type TButton = {
  children?: React.ReactNode;
  addClass?: string;
  title?: string;
  onClick?: (e: React.MouseEvent) => void;
};

export const Button = ({ children, addClass, title, onClick }: TButton) => {
  const style = `${classes.btn} ${addClass}`;

  return (
    <button onClick={onClick} className={style} title={title}>
      {children}
    </button>
  );
};

type TLinkButton = {
  children?: React.ReactNode;
  addClass?: string;
  href: string;
};

export const LinkButton = ({ children, addClass, href }: TLinkButton) => {
  const style = `${classes.btn} ${classes['link-btn']} ${addClass}`;

  return (
    <Link href={href} className={style}>
      {children}
    </Link>
  );
};
