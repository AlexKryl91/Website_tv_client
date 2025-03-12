import Page404 from '@/components/Page404/Page404';
import { headers } from 'next/headers';

const uaLang = (await headers()).get('Accept-Language') || '';

export default function NotFound() {
  const ruCountryRegex = /(ru|az|am|by|ge|kz|kg|md|tj|tm|uz|ua)/i;
  const match = uaLang.match(ruCountryRegex);
  const lang = match && match.index === 0 ? 'ru' : 'en';

  return (
    <html lang={lang}>
      <body>
        <Page404 lang={lang} />
      </body>
    </html>
  );
}
