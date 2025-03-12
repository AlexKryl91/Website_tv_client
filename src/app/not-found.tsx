import Page404 from '@/components/Page404/Page404';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 Page',
  description: 'Error 404 - Page not found',
};

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <Page404 />
      </body>
    </html>
  );
}
