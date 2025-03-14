'use client';

import { TPatentCard } from '@/types/types';
import classes from './PatentCard.module.scss';
import srcSetTemplate from '@/utils/srcSetTemplate';

import { useAppDispatch } from '@/store/hooks';
import { openModal } from '@/store/features/modal/modalSlice';

const PatentCard = ({ patent }: TPatentCard) => {
  const dispatch = useAppDispatch();

  function zoomHandler() {
    dispatch(
      openModal({
        componentName: 'ModalPatentCard',
        componentProps: { patent },
      })
    );
  }

  return (
    <picture onClick={zoomHandler} className={classes.patent}>
      <source srcSet={srcSetTemplate(patent.img, 'avif')} type="image/avif" />
      <img
        src={`/img/${patent.img}.jpg`}
        srcSet={srcSetTemplate(patent.img, 'jpeg')}
        width="210"
        alt={patent.img_alt}
      />
    </picture>
  );
};

export default PatentCard;
