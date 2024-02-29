'use client'

import React from 'react';
import { Flex, Text, Image, InputGroup, Input, InputLeftElement, Stack, Avatar } from '@chakra-ui/react';
import { SearchIcon } from '../../UIConfig/iconConfig';
import { useState, useEffect } from 'react';
import messageFetcher from '@/src/i18nConfig/msgFetcher';

interface NavbarProps {
  picPath: string,
  searchKey: string,
}

const Navbar: React.FC<NavbarProps> = ({ picPath, searchKey}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const pageHeight: number = window.innerHeight;
      const scrollTop: number = window.scrollY
      if (scrollTop > pageHeight * 0.7) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Flex 
      display='flex' 
      // bg={'green.100'}
      bg={isScrolled? 'green.100': 'transparent'}
      align='center' 
      h='60px'
      p='1'
      zIndex='modal'
      w="100%"
      position='fixed'
    >
      <Flex flex='1' align='center'>
        <a href='/'>
          <Image 
            ml='2' 
            mr='1' 
            src='/imgs/logo/codingstray-website-favicon-color.png'
            minW='50px' 
            boxSize='50px' 
            alt='navbar logo'
          />
        </a>
        <a href='/'>
          <Text
            fontSize='large' 
            color={isScrolled? 'green.1000': 'white'}
            // color='green.1000'
            as='b'
            minW='150px'
            mr='5'
          >
            {messageFetcher('index', 'title')}
          </Text>
        </a>
      </Flex>
      <Flex flex='2'>
        <InputGroup>
          <InputLeftElement>
            <SearchIcon color='gray.400'/>
          </InputLeftElement>
          <Input placeholder={messageFetcher('index', 'search')} maxW='800px' focusBorderColor='green.50' bg='green.50' />
        </InputGroup>
      </Flex>
      <Flex flex='1' justify='end'>
        <a href='/'>
          <Avatar
            mr='2'
            bg='green.700'
            size='md'
            boxShadow='0 0 0 0.5px white'
          >
          </Avatar>
        </a>
      </Flex>
    </Flex>
  );
}

export default Navbar;