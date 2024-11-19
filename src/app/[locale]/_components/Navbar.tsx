'use client'

import React from 'react';
import { Flex, Text, Image, InputGroup, Input, InputLeftElement, Button, Avatar, useDisclosure } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useState, useEffect } from 'react';
import msgFetcher from '@/src/i18nConfig/msgFetcher';
import MemberDrawer from './member/MemberDrawer';

interface NavbarProps {
  picPath: string,
  searchKey: string,
}

const Navbar: React.FC<NavbarProps> = ({ picPath, searchKey}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleScroll: () => void = () => {
    const pageHeight: number = window.innerHeight;
    const scrollTop: number = window.scrollY;
    if (scrollTop > pageHeight * 0.7) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }
  
  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <Flex
      display='flex'
      bg={isScrolled? 'green.100': 'transparent'}
      align='center' 
      h='60px'
      p='1'
      zIndex='modal'
      w='100%'
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
            as='b'
            minW='150px'
            mr='5'
          >
            {msgFetcher('index', 'title')}
          </Text>
        </a>
      </Flex>
      <Flex flex='2'>
        <InputGroup>
          <InputLeftElement>
            <SearchIcon color='gray.400'/>
          </InputLeftElement>
          <Input placeholder={msgFetcher('index', 'search')} maxW='800px' focusBorderColor='green.50' bg='green.50' />
        </InputGroup>
      </Flex>
      <Flex flex='1' justify='end'>
        <Button variant='unstyled' onClick={onOpen}>
          <Avatar
            mr='2'
            bg='green.700'
            size='md'
            boxShadow='0 0 0 0.5px white'
          >
          </Avatar>
        </Button>
        <MemberDrawer isOpenMemberDrawer={isOpen} onCloseMemberDrawer={onClose} />
      </Flex>
    </Flex>
  );
}

export default Navbar;