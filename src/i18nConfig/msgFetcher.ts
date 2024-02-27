'use client'

import { useTranslations } from 'next-intl';

const messageFetcher = (page: string, key: string) => {
  const t = useTranslations(page);
  const message = t(key);
  
  return message;
};

export default messageFetcher;