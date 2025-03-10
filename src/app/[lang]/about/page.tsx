import UnderConstruction from '@/components/UnderConstruction/UnderConstruction';
import { TPageProps } from '@/types/types';

// export async function generateMetadata({ params }: TPageProps) {
//   const { lang } = await params;
//   const { metadata } = (await getTranslation(
//     'about', lang
//   )) as TAboutJSON;

//   return {
//     title: metadata.title,
//     description: metadata.description,
//     keywords: metadata.keywords,
//   };
// }

export default async function About({ params }: TPageProps) {
  const { lang } = await params;

  return <UnderConstruction lang={lang} />;
}
