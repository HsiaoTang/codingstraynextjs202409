'use client'

import React from 'react';
import { Flex, Center, Text, Spacer, Select } from '@chakra-ui/react';
import messageFetcher from '@/src/i18nConfig/msgFetcher';
import { locales } from '@/src/config';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation'

interface FooterProps {
  zIndex: string
}

const Footer: React.FC<FooterProps> = (zIndex) => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const switchLocale = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let currentUrl = window.location.href;
    const [,,, locale, ...segment] = currentUrl.split('/');
    currentUrl = '/' + event.target.value + segment.join('/');
    router.push(currentUrl, { scroll: false });
  }
  const currentLocale = useLocale();
  return (
    <Flex bg='green.100' align='center' h='60px' p='1'>
      <Spacer flex='1'/>
      <Center flex='1' bg='green.100' h='60px' p='1'>
        <Text color='green.1000' minW='200px'>&copy;  {currentYear} {messageFetcher('index', 'title')}, Inc.</Text>
      </Center>
      <Flex flex='1'>
        <Spacer flex='3'/>
        <Select icon={<> </>} textAlign='center' flex='1' focusBorderColor='green.50' bg='green.50'
        onChange={switchLocale}
        value={currentLocale}>
          {locales.map((locale: string) => (
            <option key={locale} value={locale}>
              {messageFetcher('index', locale)}
            </option>
          ))}
        </Select>
      </Flex>
    </Flex>
  );
}

export default Footer;