import classes from './BurgerButton.module.scss';

type TBurgerBtn = {
  title: string;
  isOpen: boolean;
  onClick: () => void;
};

const BurgerButton = ({ title, isOpen, onClick }: TBurgerBtn) => {
  const style = `${classes['burger-btn']} ${isOpen ? classes.open : ''}`;

  return (
    <button onClick={onClick} className={style} type="button" title={title}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span className="sr-only">{title}</span>
    </button>
  );
};

export default BurgerButton;
