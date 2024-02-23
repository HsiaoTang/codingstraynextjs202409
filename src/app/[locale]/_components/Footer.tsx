import React from 'react';
import { Flex, Center, Text, Spacer } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react';
import messageFetcher from '@/src/i18nConfig/msgFetcher';
import { locales } from '@/src/i18nConfig/i18nConstant'

interface FooterProps {
  zIndex: string
}

const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Flex bg='green.100' align='center' h='60px' p='1'>
      <Spacer flex='1'/>
      <Center flex='1' bg='green.100' h='60px' p='1'>
        <Text color='green.1000'>&copy;  {currentYear} CodingStray, Inc.</Text>
      </Center>
      <Flex flex='1'>
        <Spacer flex='2'/>
        <Select flex='1'>
          {locales.map((locale: string) => (
            <option>
              {messageFetcher('index', locale)}
            </option>
          ))}
        </Select>
      </Flex>
    </Flex>
  );
}

export default Footer;