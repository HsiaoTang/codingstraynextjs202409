'use client'

import React from 'react';
import { indexGridPic } from '@/public/indexGridPicsSrc';
import { Grid, Image, GridItem } from '@chakra-ui/react'

interface IndexGridProps {
  pics: indexGridPic[],
}

const IndexGridComp: React.FC<IndexGridProps> = ({ pics }) => {
  return (
    <Grid
      templateRows='repeat(2, 1fr)'
      templateColumns='repeat(3, 1fr)'
      gap={8}
      maxH='70vh'
      maxW='95vw'
      minW='25vw'
      p='5'
      filter='auto'
      blur='2px'
      brightness='120%'
      contrast='50%'
    >
      {pics.map((pic, index) => (
        <GridItem key={index}>
          <Image src={pic.src} />
        </GridItem>
      ))}
    </Grid>
  );
}

export default IndexGridComp;