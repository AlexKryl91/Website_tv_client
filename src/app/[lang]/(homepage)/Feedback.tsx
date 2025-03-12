import classes from './Feedback.module.scss';
import { THomepageJSON, TLangSet } from '@/types/types';
import SectionLight from '@/components/Sections/SectionLight';
import FeedbackForm from '@/components/FeedbackForm/FeedbackForm';
import Link from 'next/link';

type TFeedback = {
  content: THomepageJSON['feedback'];
  lang: TLangSet;
};

const Feedback = ({ content, lang }: TFeedback) => {
  return (
    <SectionLight header={content.header}>
      <p className={classes['feedback__text']}>{content.feedback_text}</p>
      <FeedbackForm labels={content.feedback_form}></FeedbackForm>
      <p className={classes['call__text']}>{content.call_text}</p>
      <Link
        className={classes['call__link']}
        href={`/${lang}${content.call_link.href}`}
        aria-label={content.call_link.aria_label}
      >
        {content.call_link.label}
      </Link>
    </SectionLight>
  );
};

export default Feedback;
