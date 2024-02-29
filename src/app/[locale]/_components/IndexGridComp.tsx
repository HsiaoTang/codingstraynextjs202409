'use client'

import React from 'react';
import { indexGridPic } from '@/public/indexGridPicsSrc';
import { Grid, Image, GridItem, Center } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import messageFetcher from '@/src/i18nConfig/msgFetcher';

interface IndexGridProps {
  pics: indexGridPic[],
}

const IndexGridComp: React.FC<IndexGridProps> = ({ pics }) => {
  const [isResized, setIsResized] = useState(false);

  useEffect(() => {
    const handleResized= () => {
      const pageHeight: number = window.innerHeight;
      const pageWidth: number = window.innerWidth;
      const h2w: number = pageHeight / pageWidth;
      if (h2w > 1.2) {
        setIsResized(true);
      } else {
        setIsResized(false);
      }
    };

    handleResized();
    window.addEventListener('resize', handleResized);

    return () => {
      window.removeEventListener('resized', handleResized);
    };
  }, []);
  return (
    <Grid
      templateRows={ isResized? 'repeat(3, 1fr)': 'repeat(2, 1fr)' }
      templateColumns={ isResized? 'repeat(2, 1fr)' :'repeat(3, 1fr)' }
      gap={8}
      h='100%'
      w='100%'
      p='5'
    >
      {pics.map((pic, index) => (
        <GridItem key={index}>
          <Image src={pic.src} boxShadow='md' rounded='md' />
          <Center
            key={index}
            position="relative"
            bottom='50%'
            bg="rgba(0, 0, 0, 0.5)"
            as='b'
            color="white"
            h='20%'
          >
            {messageFetcher('index', pic.title)}
          </Center>
        </GridItem>
      ))}
    </Grid>
  );
}

export default IndexGridComp;