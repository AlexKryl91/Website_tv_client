import { TLangSet, TSolutionsJSON, TUnitJSON } from '@/types/types';
import classes from './Subsection.module.scss';
import { montserrat } from '@utils/fonts';
import Image from 'next/image';
import { Fragment } from 'react';
// import AnimatedBar from '@/components/AnimatedBar/AnimatedBar';

type TSubsection = {
  content: TUnitJSON;
  common: TSolutionsJSON['common'];
  lang: TLangSet;
};

const Subsection = ({ content, common, lang }: TSubsection) => {
  const headerStyle = `${montserrat.className} ${classes['subsection__header']}`;

  return (
    <article className={classes.subsection}>
      <div className={classes['header-wrapper']}>
        <Image
          className={classes['unit-logo']}
          src={`/img/${content.img}_${lang}.svg`}
          width={110}
          height={70}
          alt={content.img_alt}
        />
        <h4 className={headerStyle}>{content.title}</h4>
      </div>

      {/* Introduction */}
      <p className={classes.paragraph}>
        <strong>{content.description.strong}</strong>
        {content.description.text}
        {content.description.endline && (
          <span className={classes.extra}>
            {content.description.endline}
            <strong>{content.description.endline_strong}</strong>
          </span>
        )}
      </p>

      {/* Sliderwith Diagrams  */}
      <div>SLIDES</div>

      {/* Description of Operational principles */}
      {content.operation.map((oper) => (
        <Fragment key={oper.header}>
          <h5 className={classes.subheader}>{oper.header}</h5>
          <p className={classes.paragraph}>
            {oper.paragraphs.map((part) => (
              <span key={part} className={classes.part}>
                {part}
              </span>
            ))}
          </p>
        </Fragment>
      ))}

      {/* Feature Lists */}
      {content.features.map((feat) => (
        <Fragment key={feat.title}>
          {feat.title && (
            <>
              <h5 className={classes.subheader}>{feat.title}</h5>
              <ul className={classes['feat-list']}>
                {feat.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          )}
        </Fragment>
      ))}

      {/* Ending */}
      <p className={classes.ending}>
        <span>{common.summary[0]}</span>
        <a href="">{common.summary[1]}</a>
        <span>{common.summary[2]}</span>
        <a href="">{common.summary[3]}</a>
      </p>
      {/* <AnimatedBar /> */}
    </article>
  );
};

export default Subsection;
