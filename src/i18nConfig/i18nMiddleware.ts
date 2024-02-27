import { NextRequest } from "next/server";
import createIntlMiddleware from 'next-intl/middleware';
import { defaultLocale } from "../config";

export default async function i18nMiddleware(request: NextRequest, locales: Array<string>){
  const handlei18nRouting = createIntlMiddleware({
    locales,
    defaultLocale: defaultLocale,
  });
  const response = handlei18nRouting(request);
  return response;
}