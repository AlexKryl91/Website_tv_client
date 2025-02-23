import classes from './ArrowButton.module.scss';
import ArrowIcon from '@icons/arrow.svg';

type TArrowBtn = {
  onClick: () => void;
  addClass?: string;
  title: string;
  side: 'left' | 'right';
};

const ArrowButton = ({ onClick, addClass = '', title, side }: TArrowBtn) => {
  const styleBtn = `${classes['arrow-btn']} ${addClass}`;
  const styleIcon = `${classes['arrow-icon']} ${
    side === 'left' ? classes['prev'] : ''
  }`;

  return (
    <button
      onClick={onClick}
      className={styleBtn}
      type="button"
      title={title}
      aria-label={title}
    >
      <ArrowIcon className={styleIcon} />
    </button>
  );
};

export default ArrowButton;
