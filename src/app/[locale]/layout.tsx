import type { Metadata } from 'next'
import { Noto_Serif_TC } from 'next/font/google'
import Navbar from './_components/Navbar';
import Footer from './_components/Footer';
import UIProvider from '../UIConfig/UIProvider';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import CombinedProvider from './CombinedProviders';
import StoreProvider from '../ReduxConfig/StoreProvider';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import LoadingProgress from './_components/LoadingProgress';
import { KeycloakProvider } from '../KeycloakConfig/KeyCloakProvier';

config.autoAddCss = false; 

const globalFont = Noto_Serif_TC({ 
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CodingStray',
  icons: { icon: ['/imgs/logo/favicon.ico'], apple: ['/imgs/logo/apple-touch-icon.png'] }
}

export default function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode,
  params: {locale: string}
}) {
  return (
    <html lang={locale}>
      <body className={globalFont.className}>  
        <CombinedProvider providers={[
          [UIProvider, {}],
          [StoreProvider, {}],
          [NextIntlClientProvider, {messages: useMessages()}],
          [KeycloakProvider, {}],
        ]}>
          <LoadingProgress />
          <Navbar picPath='' searchKey=''/>
            {children}
          <Footer />
        </CombinedProvider>
      </body>
    </html>
  )
}