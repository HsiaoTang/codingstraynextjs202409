'use client'

import React from 'react';
import { Center } from '@chakra-ui/react';
import msgFetcher from '@/src/configs/i18n/msgFetcher';


const IndexBackDrop: React.FC = () => {
  return (
    <Center 
      bgImage='url("/imgs/index/indexBackDrop.jpg")'
      bgPosition='center'
      bgRepeat='no-repeat'
      bgSize='cover'
      minW='100vw'
      height='70vh'
      p='0'
      mb='0'
    >
      <Center 
        fontSize='3xl' 
        as='b' 
        color='white'
        minW='100vw'
        height='70vh'
        backdropFilter='auto' backdropBrightness='50%'
        textAlign='center'
      >
        {msgFetcher('index', 'website_intro_pt1')}<br/>
        {msgFetcher('index', 'website_intro_pt2')}
      </Center>
    </Center>
  );
}

export default IndexBackDrop;