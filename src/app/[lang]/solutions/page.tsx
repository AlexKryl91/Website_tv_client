import classes from './solutions.module.scss';
import getLocale from '@utils/getLocale';
import { TSolutionsJSON, TPageProps } from '@/types/types';
import { SectionDark } from '@/components/Sections/Sections';

export default async function Solutions({ params }: TPageProps) {
  const { lang } = await params;
  const t = (await getLocale('solutions', lang)) as TSolutionsJSON;

  return (
    <>
      <h1 className="sr-only">{t.page_header}</h1>

      <SectionDark
        header={t.header}
        addClass={classes.solutions}
        isOnTop={true}
      >
        <ul>
          {t.systems.map((system) => (
            <li key={system.title}>
              <h3 className="sr-only">{system.title}</h3>
              <details>
                <summary>
                  <strong>{system.title}</strong>
                  {system.text}
                </summary>
                СКРЫТО
              </details>
            </li>
          ))}
        </ul>
      </SectionDark>
    </>
  );
}
