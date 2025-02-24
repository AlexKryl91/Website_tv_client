import classes from './SlideItem.module.scss';
import { TDiagramSlide } from '@/types/types';
import Image from 'next/image';
import { useRef, RefObject } from 'react';

type TSlideItem = {
  slide: TDiagramSlide;
  number: number;
  value: number;
  clickHandler: (ref: RefObject<HTMLLIElement | null>) => void;
};

const SlideItem = ({ slide, number, value, clickHandler }: TSlideItem) => {
  const inlineStyleCard = { width: `${100 / number}%` };
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onClick={() => clickHandler(ref)}
      value={value}
      className={classes.slide}
      style={inlineStyleCard}
    >
      <h5 className={classes['slide__header']}>{slide.caption}</h5>
      <Image
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
