'use client'

import { useTranslations } from 'next-intl';

const msgFetcher = (page: string, key: string) => {
  const t = useTranslations(page);
  const message = t(key);
  
  return message;
}

export default msgFetcher;