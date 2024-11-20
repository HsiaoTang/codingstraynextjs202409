'use client'

import React from 'react';
import { Flex, Center, Text, Spacer, Select } from '@chakra-ui/react';
import msgFetcher from '@/src/configs/i18nConfig/msgFetcher';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

const Footer: React.FC = () => {
  const locales = process.env.NEXT_PUBLIC_LOCALES?.split(',') || [];
  const currentYear: number = new Date().getFullYear();
  const router: AppRouterInstance = useRouter();
  const switchLocale: (e: React.ChangeEvent<HTMLSelectElement>) => void = (e) => {
    let currentUrl: string = window.location.href;
    const [,,, locale, ...segment]: string[] = currentUrl.split('/');
    currentUrl = '/' + e.target.value + segment.join('/');
    router.push(currentUrl, { scroll: false });
  }
  const currentLocale = useLocale();
  return (
    <Flex bg='green.100' align='center' h='60px' p='1'>
      <Spacer flex='1'/>
      <Center flex='1' bg='green.100' h='60px' p='1'>
        <Text color='green.1000' minW='200px'>&copy;  {currentYear} {msgFetcher('index', 'title')}, Inc.</Text>
      </Center>
      <Flex flex='1'>
        <Spacer flex='3'/>
        <Select icon={<> </>} textAlign='center' w='120px' focusBorderColor='green.50' bg='green.50' onChange={switchLocale} value={currentLocale}>
          {locales.map((locale: string) => (
            <option key={locale} value={locale}>
              {msgFetcher('index', locale)}
            </option>
          ))}
        </Select>
      </Flex>
    </Flex>
  );
}

export default Footer;