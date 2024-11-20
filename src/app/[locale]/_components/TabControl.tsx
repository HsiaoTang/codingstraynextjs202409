'use client'

import msgFetcher from '@/src/configs/i18n/msgFetcher';
import { Tab, Tabs, TabList, TabPanel, TabPanels } from '@chakra-ui/react';
import React from 'react';
import IndexGridComp from './IndexGridComp';
import { indexGridPics } from '@/public/indexGridPicsSrc';

const TabControl: React.FC = () => {
  const tabLabels: string[] = ['trending', 'latest', 'category'];

  return (
    <Tabs
      variant='soft-rounded'
      w='100%'
      align='center'
      h='100%'
      mt='5'
    >
      <TabList 
        w='fit-content'  
        borderRadius='full'
        boxShadow='base'
        h='35px'
      >
        {tabLabels.map(label => (
          <Tab
            key={label}
            _selected={{ bg: 'green.300' ,boxShadow: 'base' }}
            minW='30px'
          >
            {msgFetcher('index', label)}
          </Tab>
        ))}
      </TabList>
      <TabPanels mt='2vh'>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <IndexGridComp pics={indexGridPics} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default TabControl;
