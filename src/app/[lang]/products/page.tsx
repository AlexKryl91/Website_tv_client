import UnderConstruction from '@/components/UnderConstruction/UnderConstruction';
import { TPageProps } from '@/types/types';

// export async function generateMetadata({ params }: TPageProps) {
//   const { lang } = await params;
//   const { metadata } = (await getTranslation(
//     'products', lang
//   )) as TProductsJSON;

//   return {
//     title: metadata.title,
//     description: metadata.description,
//     keywords: metadata.keywords,
//   };
// }

export default async function Products({ params }: TPageProps) {
  const { lang } = await params;

  return <UnderConstruction lang={lang} />;
}
