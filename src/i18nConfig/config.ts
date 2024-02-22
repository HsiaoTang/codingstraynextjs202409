import { Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'zh_TW'] as const;

export const pathnames = {
  '/': '/',
  '/pathnames': {
    en: '/pathnames',
    zh_TW: '/路徑名稱'
  }
} satisfies Pathnames<typeof locales>;

export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;