import classes from './Carousel.module.scss';
import Image from 'next/image';

type TCarouselProps = {
  cards: {
    id: string;
    name: string;
    href: string;
  }[];
};

const ICON_BARS = ['first', 'second'];

const Carousel = ({ cards }: TCarouselProps) => {
  return (
    <>
      {ICON_BARS.map((bar) => (
        <div key={bar} className={classes.carousel}>
          {cards.map((client) => (
            <a key={client.id} href={client.href} target="_blank">
              <Image
                src={`/img/companies/${client.id}.svg`}
                alt={client.name}
                width={180}
                height={180}
                className={classes['logo-card']}
                priority
              />
            </a>
          ))}
        </div>
      ))}
    </>
  );
};

export default Carousel;
