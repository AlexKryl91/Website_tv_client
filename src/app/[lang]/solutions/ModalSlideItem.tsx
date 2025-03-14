import classes from './SlideItem.module.scss';
import { TSlideItem } from '@/types/types';
import Image from 'next/image';

export const ModalSlideItem = ({ slide }: TSlideItem) => {
  return (
    <div className={classes['modal-slide']}>
      <h5 className={classes['modal-slide__header']}>{slide.caption}</h5>
      <Image
        className={classes['modal-slide__diagram']}
        src={`/img/diagrams/${slide.filename}.svg`}
        width={600}
        height={415}
        alt={slide.img_alt}
      />
      <ul className={classes['modal-slide__equip-list']}>
        {slide.list_1.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <ul className={classes['modal-slide__flow-list']}>
        {slide.list_2.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
