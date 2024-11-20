import { NextRequest } from 'next/server';
import i18nMiddleware from '@/src/configs/i18n/i18nMiddleware';

const locales = process.env.NEXT_PUBLIC_LOCALES?.split(',') || [];

export default async function middleware(request: NextRequest) {
  const response = i18nMiddleware(request, locales);
  return response;
}
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|zh_TW)/:path*']
  // matcher: ['/', '/(' + locales.join('|') + ')/:path*']
}