import { NextRequest } from "next/server";
import createIntlMiddleware from 'next-intl/middleware';

export default async function i18nMiddleware(request: NextRequest, locales: Array<string>){
  const [, locale, ...segments] = request.nextUrl.pathname.split('/');
  let defaultLocale: string = (!locales.includes(locale))? 'zh_TW': locale;

  const handlei18nRouting = createIntlMiddleware({
    locales,
    defaultLocale
  });
  const response = handlei18nRouting(request);
  response.headers.set('x-your-custom-locale', defaultLocale);
  return response;
}