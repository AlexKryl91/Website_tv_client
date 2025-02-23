import classes from './SlideItem.module.scss';
// import { MouseEvent } from 'react';
import { TUnitJSON } from '@/types/types';
import Image from 'next/image';

type TSlideItem = {
  slide: TUnitJSON['slides'][0];
  number: number;
};

const SlideItem = ({ slide, number }: TSlideItem) => {
  const inlineStyleCard = { width: `${100 / number}%` };

  function enlargeHandler() {
    console.log('ZOOM');
  }

  return (
    <li key={slide.caption} className={classes.slide} style={inlineStyleCard}>
      <h5 className={classes['slide__header']}>{slide.caption}</h5>
      <Image
        onClick={enlargeHandler}
        className={classes.diagram}
        src={`/img/diagrams/${slide.filename}.svg`}
        width={600}
        height={415}
        alt={slide.img_alt}
      />
      <ul className={classes['equip-list']}>
        {slide.list_1.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <ul className={classes['flow-list']}>
        {slide.list_2.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </li>
  );
};

export default SlideItem;
