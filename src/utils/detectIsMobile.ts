import { headers } from 'next/headers';

export default async function detectIsMobile() {
  const regex = /android.+(mobi|mobile|tablet)|ip(hone|[oa]d)/i;
  const res = await headers();
  const ua = res.get('user-agent') || '';

  return regex.test(ua);
}
