import React from 'react';
import { Flex, Text, Image, InputGroup, Input, InputLeftElement, Stack, Avatar } from '@chakra-ui/react';
import { SearchIcon } from '../../UIConfig/iconConfig';
import { useTranslations } from 'next-intl';

interface NavbarProps {
  picPath: string,
  searchKey: string,
}

const Navbar: React.FC<NavbarProps> = ({ picPath, searchKey }) => {
  return (
    <Flex display='flex' bg='green.100' alignItems='center' h='60px' p='1' zIndex='modal'>
      <a href='/'><Image ml='2' mr='4' src='/imgs/logo/codingstray-website-favicon-color.png' boxSize='50px' alt='navbar logo' /></a>
      <a href='/'><Text ml='2' fontSize='large' color='green.1000'>CodingStray</Text></a>
      <InputGroup ml='170'>
        <InputLeftElement><SearchIcon color='gray.400'></SearchIcon></InputLeftElement>
        <Input pl='9' placeholder='搜尋' maxW='700px' focusBorderColor='green.50' bg='green.50' />
      </InputGroup>
      <Stack mr='3'>
        <a href='/'><Avatar bg='green.700' size='md'></Avatar></a>
      </Stack>
    </Flex>
  );
}

export default Navbar;