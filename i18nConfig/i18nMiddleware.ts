import { AppDispatch, RootState } from '@/app/ReduxConfig/store';
import createIntlMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { useDispatch, useSelector } from 'react-redux';
import { setLocale } from './localeSlice';

const i18nMiddleware = async (request: NextRequest) => {
  const currentLocale: string = useSelector((state: RootState) => state.locale);
  const dispatch: AppDispatch = useDispatch();

  const getLocale = (): string => {
    let locale: string = '';
    if (!localStorage.getItem('locale') || !currentLocale || localStorage.getItem('locale') !== currentLocale) {
      const timezone: string = Intl.DateTimeFormat().resolvedOptions().timeZone;
      console.log(timezone);
      locale = (timezone === 'Asia/Taipei' || timezone === 'Asia/Taipei')? 'zh-TW': 'en';
      localStorage.setItem('locale', locale);
      dispatch(setLocale(locale));
    }
    locale = JSON.parse(localStorage.getItem('locale') || '""');
    return locale;
  };

  const defaultLocale: string = getLocale();
  const handlei18nLocale = createIntlMiddleware({
    locales: ['en', 'zh-TW'],
    defaultLocale
  });
  return handlei18nLocale(request);
}
 
export default i18nMiddleware;