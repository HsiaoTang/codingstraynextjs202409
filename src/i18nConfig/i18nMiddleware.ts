import { NextRequest } from "next/server";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../app/ReduxConfig/store";
import { setLocale } from "./localeSlice";
import createIntlMiddleware from 'next-intl/middleware';

export default async function i18nMiddleware(request: NextRequest, locales: Array<string>){
  // const currentLocale: string = useSelector((state: RootState) => state.locale);
  // const dispatch: AppDispatch = useDispatch();

  // const getLocale = (): string => {
  //   let locale: string = '';
  //   if (!localStorage.getItem('locale') || !currentLocale || localStorage.getItem('locale') !== currentLocale) {
  //     const timezone: string = Intl.DateTimeFormat().resolvedOptions().timeZone;
  //     console.log(timezone);
  //     locale = (timezone === 'Asia/Taipei' || timezone === 'Asia/Taiwan')? 'zh-TW': 'en';
  //     localStorage.setItem('locale', locale);
  //     dispatch(setLocale(locale));
  //   }
  //   locale = JSON.parse(localStorage.getItem('locale') || '""');
  //   return locale;
  // };

  const [, locale, ...segments] = request.nextUrl.pathname.split('/');

  const defaultLocale: string = 'zh_TW';
  const handlei18nRouting = createIntlMiddleware({
    locales,
    defaultLocale
  });
  const response = handlei18nRouting(request);
  response.headers.set('x-your-custom-locale', defaultLocale);
  
  return response;
}