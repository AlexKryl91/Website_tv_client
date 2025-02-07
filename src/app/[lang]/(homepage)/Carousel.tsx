import classes from './Carousel.module.scss';
import Image from 'next/image';

type TCarouselProps = {
  cards: {
    id: string;
    name: string;
    href: string;
  }[];
};

const Carousel = ({ cards }: TCarouselProps) => {
  return (
    <div className={classes.carousel}>
      {cards.map((client) => (
        <a key={client.id} href={client.href} target="_blank">
          <Image
            src={`img/companies/${client.id}.svg`}
            alt={client.name}
            width={180}
            height={180}
            className={classes['logo-card']}
          />
        </a>
      ))}
    </div>
  );
};

export default Carousel;
