import React from 'react';
import { Center, Text } from '@chakra-ui/react';

interface FooterProps {
  zIndex: string
}

const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Center display='flex' bg='green.100' textAlign='center' alignItems='center' h='60px' p='1'>
      <Text color='green.1000'>&copy;  {currentYear} CodingStray, Inc.</Text>
    </Center>
  );
}

export default Footer;