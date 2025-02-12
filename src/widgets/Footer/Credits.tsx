import classes from './Credits.module.scss';
import { TNavMenu } from '@/types/types';

const Credits = ({ content }: Pick<TNavMenu, 'content'>) => {
  function setLinkBg(filename = '') {
    return { backgroundImage: `url(icons/${filename}.svg)` };
  }

  return (
    <ul className={classes.credits}>
      {content.credits.map((item) => (
        <li key={item.text} className={classes['credits__item']}>
          <span>{item.text}</span>
          <div className={classes['link-wrapper']}>
            {item.refs.map((link) => (
              <a
                key={link.label}
                style={setLinkBg(link.label)}
                href={link.href}
                target="_blank"
                aria-label={link.aria_label}
              ></a>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Credits;
