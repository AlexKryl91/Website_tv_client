import classes from './Address.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { TNavMenu } from '@/types/types';

function phoneNumFilter(num: string) {
  return num
    .split('')
    .filter((char) => /\+|\d/.test(char))
    .join('');
}

const Address = ({ lang, content }: TNavMenu) => {
  const year = new Date().getFullYear();

  return (
    <address className={classes.address}>
      <Link
        href={`/${lang}`}
        className={classes['address__logo']}
        title={content.logo.aria_label}
        aria-label={content.logo.aria_label}
      >
        <Image
          src={`/img/logo_large_${lang}.svg`}
          alt={content.logo.alt}
          width={265}
          height={32}
          priority
        />
      </Link>

      <ul className={classes['address__list']}>
        <li
          className={classes.org}
        >{`${year}. ${content.info.organization}`}</li>

        <li className={classes.loc}>
          <a
            href={`${content.info.location}`}
            target="_blank"
            aria-label={content.info.loc_aria_label}
          >
            {content.info.address.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </a>
        </li>

        <li className={classes.tel}>
          {content.info.telephone.map((item) => {
            return (
              <a key={item} href={`tel:${phoneNumFilter(item)}`}>
                {item}
              </a>
            );
          })}
        </li>

        <li className={classes.email}>
          <a
            href={`mailto:${content.info.email}`}
            className={classes['address__email']}
          >
            {content.info.email}
          </a>
        </li>
      </ul>
    </address>
  );
};

export default Address;
