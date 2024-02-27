import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { locales } from '../config';

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
  return {
    messages: (
      await (locale === 'zh_TW'
        ? 
          import('../../messages/zh_TW.json')
        : import('../../messages/en.json'))
    ).default
  };
});