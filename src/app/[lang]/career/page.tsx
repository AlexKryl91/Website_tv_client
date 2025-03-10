import UnderConstruction from '@/components/UnderConstruction/UnderConstruction';
import { TPageProps } from '@/types/types';

// export async function generateMetadata({ params }: TPageProps) {
//   const { lang } = await params;
//   const { metadata } = (await getTranslation(
//     'career', lang
//   )) as TCareerJSON;

//   return {
//     title: metadata.title,
//     description: metadata.description,
//     keywords: metadata.keywords,
//   };
// }

export default async function Career({ params }: TPageProps) {
  const { lang } = await params;

  return <UnderConstruction lang={lang} />;
}
