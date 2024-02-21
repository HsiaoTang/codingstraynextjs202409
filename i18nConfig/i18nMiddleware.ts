import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['en', 'zh-TW'],
  defaultLocale: 'zh-TW'
});
 
export const config = {
  matcher: ['/', '/(zh-TW|en)/:path*']
};