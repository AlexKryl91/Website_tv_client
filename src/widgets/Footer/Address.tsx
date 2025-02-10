import classes from './Address.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { TLangSet, TNavigationJSON } from '@/types/types';

type TAdrress = {
  lang: TLangSet;
  text: TNavigationJSON;
};

const Address = ({ lang, text }: TAdrress) => {
  const year = new Date().getFullYear();

  return (
    <address className={classes.address}>
      <Link
        href={`/${lang}`}
        className={classes['address__logo']}
        title={text.logo.alt}
      >
        <Image
          src={`img/logo_large_${lang}.svg`}
          alt={text.logo.alt}
          width={265}
          height={32}
          priority
        />
      </Link>

      <ul className={classes['address__list']}>
        <li className={classes.org}>{`${year}. ${text.info.organization}`}</li>

        <li className={classes.loc}>
          <a href={`${text.info.location}`} target="_blank">
            {text.info.address.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </a>
        </li>

        <li className={classes.tel}>
          {text.info.telephone.map((item) => (
            <a key={item} href={`tel: ${item}`}>
              {item}
            </a>
          ))}
        </li>

        <li className={classes.email}>
          <a
            href={`mailto: ${text.info.email}`}
            className={classes['address__email']}
          >
            {text.info.email}
          </a>
        </li>
      </ul>
    </address>
  );
};

export default Address;
