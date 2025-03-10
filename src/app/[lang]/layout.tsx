import '@styles/main.scss';
import { roboto } from '@utils/fonts';
import { TLayoutProps } from '@/types/types';
import Navbar from '@widgets/Navbar/Navbar';
import Footer from '@widgets/Footer/Footer';
import UpButton from '@/widgets/UpButton/UpButton';
import StoreProvider from '../StoreProvider';
import Modal from '@/widgets/Modal/Modal';
import { Suspense } from 'react';
import Loading from './loading';

// export async function generateMetadata() {
//   // const { lang } = await params;
//   // const { metadata } = (await getTranslation(
//   //   'implementation', lang
//   // )) as TImplementationJSON;

//   return {
//     // title: metadata.title,
//     // description: metadata.description,
//     // keywords: metadata.keywords,
//     openGraph: {
//       title: 'Acme',
//       description: 'Acme is a...',
//     },
//   };
// }

export default async function RootLayout({
  children,
  params,
}: Readonly<TLayoutProps>) {
  const { lang } = await params;

  return (
    <StoreProvider lang={lang}>
      <html lang={lang}>
        <body className={roboto.className}>
          <Suspense fallback={<Loading />}>
            <Navbar lang={lang} />
            <main>{children}</main>
            <Footer lang={lang}></Footer>
            <UpButton />
            <Modal />
          </Suspense>
        </body>
      </html>
    </StoreProvider>
  );
}
