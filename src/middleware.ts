import { NextRequest } from 'next/server';
import i18nMiddleware from './i18nConfig/i18nMiddleware';
import { locales } from './config';

export default async function middleware(request: NextRequest) {
  const response = i18nMiddleware(request, locales);
  return response;
}
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|zh_TW)/:path*']
  // matcher: ['/', '/(' + locales.join('|') + ')/:path*']
}