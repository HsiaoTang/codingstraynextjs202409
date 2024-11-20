import { NextRequest } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';

const defaultLocale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE || 'zh_TW';

export default async function i18nMiddleware(request: NextRequest, locales: Array<string>){
  const handlei18nRouting = createIntlMiddleware({
    locales,
    defaultLocale: defaultLocale,
  });
  const response = handlei18nRouting(request);
  return response;
}