'use client'

import React from 'react';
import { Center } from '@chakra-ui/react';
import messageFetcher from '@/src/i18nConfig/msgFetcher';


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
        fontSize='4xl' 
        as='b' 
        color='white'
        minW='100vw'
        height='70vh'
        backdropFilter='auto' backdropBrightness='50%'
        textAlign='center'
      >
        {messageFetcher('index', 'website_intro_pt1')}<br/>
        {messageFetcher('index', 'website_intro_pt2')}
      </Center>
    </Center>
  );
}

export default IndexBackDrop;