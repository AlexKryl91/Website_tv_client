'use client';

import { MouseEvent, useState } from 'react';
import classes from './DiagramSlider.module.scss';
import { TUnitJSON } from '@/types/types';
import SlideItem from './SlideItem';
import ArrowButton from '@/components/ArrowButton/ArrowButton';

type TDiagramSlider = {
  slides: TUnitJSON['slides'];
  labels: {
    prev: string;
    next: string;
  };
};

const DiagramSlider = ({ slides, labels }: TDiagramSlider) => {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const maxIndex = slides.length - 1;

  function prevHandler() {
    setSlideIndex((index) => (index === 0 ? maxIndex : index - 1));
  }
  function nextHandler() {
    setSlideIndex((index) => (index === maxIndex ? 0 : index + 1));
  }
  function bulletHandler(e: MouseEvent) {
    const bullet = e.target as HTMLButtonElement;
    setSlideIndex(Number(bullet.value));
  }
  function bulletStyle(index: number) {
    return `${classes['bullet-btn']} ${
      index === slideIndex ? classes.selected : ''
    }`;
  }

  const inlineStyleSlider = {
    width: `${slides.length * 100}%`,
    transform: `translateX(${slideIndex * (-100 / slides.length)}%)`,
  };

  return (
    <div className={classes['diagram-slider']}>
      <ArrowButton
        onClick={prevHandler}
        addClass={classes['slider-btn']}
        title={labels.prev}
        side={'left'}
      />
      <div className={classes['slider-frame']}>
        <ul className={classes.slider} style={inlineStyleSlider}>
          {slides.map((slide) => (
            <SlideItem
              key={slide.caption}
              slide={slide}
              number={slides.length}
            ></SlideItem>
          ))}
        </ul>
      </div>
      <ArrowButton
        onClick={nextHandler}
        addClass={classes['slider-btn']}
        title={labels.next}
        side={'right'}
      />
      <div className={classes['bullets-wrapper']}>
        {slides.map((slide, i) => (
          <button
            key={slide.caption}
            onClick={bulletHandler}
            className={bulletStyle(i)}
            value={i}
            type="button"
          ></button>
        ))}
      </div>
    </div>
  );
};

export default DiagramSlider;
