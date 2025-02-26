import classes from './Clients.module.scss';
import { SectionLight } from '@/components/Sections/Sections';
import Carousel from './Carousel';
import { THomepageJSON } from '@/types/types';

type TClients = {
  content: THomepageJSON['clients'];
};

const Clients = ({ content }: TClients) => {
  return (
    <SectionLight header={content.header}>
      <div className={classes.clients}>
        <Carousel cards={content.cards} />
      </div>
    </SectionLight>
  );
};

export default Clients;
