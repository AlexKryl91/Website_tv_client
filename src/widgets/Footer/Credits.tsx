import classes from './Credits.module.scss';
import { TNavMenu } from '@/types/types';

function setLinkBg(filename = '') {
  return { backgroundImage: `url(icons/${filename}.svg)` };
}

const Credits = ({ content }: Pick<TNavMenu, 'content'>) => {
  return (
    <ul className={classes.credits}>
      {content.credits.map((item) => (
        <li key={item.text} className={classes['credits__item']}>
          <span>{item.text}</span>
          <div className={classes['link-wrapper']}>
            {item.refs.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                style={setLinkBg(link.label)}
              ></a>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Credits;
