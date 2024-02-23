import { Button, ButtonGroup } from '@chakra-ui/react'
import { Flex, Box, Text, Image } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('index');
  return (
    <Flex minHeight='100vh' background='green.50' boxShadow='content'>
      <Button colorScheme='blue'>Click it 測試</Button>
      <Box boxShadow='dark-lg' p='6' rounded='md' bg='white' zIndex='sticky'>
        Dark lg
      </Box>
      <Box boxShadow='outline' p='6' rounded='md' bg='white'>
        Outline
      </Box>
      <Box boxShadow='inner' p='6' rounded='md' bg='white'>
        Inner
      </Box>
    </Flex>
  );
}