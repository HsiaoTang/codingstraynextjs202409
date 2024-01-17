// app/layout.tsx
import { UIProvider } from './UIProvider'
import type { Metadata } from 'next'
import Head from 'next/head';
import { Noto_Serif_TC } from 'next/font/google'

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
}: {
  children: React.ReactNode,
}) {
  return (
    <html>
      <body className={globalFont.className}>
        <UIProvider>
          {children}
        </UIProvider>
      </body>
    </html>
  )
}