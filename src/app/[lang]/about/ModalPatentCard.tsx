'use client';

import classes from './ModalPatentCard.module.scss';
import { TPatentCard } from '@/types/types';

const ModalPatent = ({ patent }: TPatentCard) => {
  return (
    <picture className={classes['modal-patent']}>
      <source srcSet={`/img/${patent.img}_3x.avif`} type="image/avif" />
      <img src={`/img/${patent.img}_3x.jpg`} width="630" alt={patent.img_alt} />
    </picture>
  );
};

export default ModalPatent;
