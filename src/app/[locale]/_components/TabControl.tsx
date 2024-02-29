'use client'

import messageFetcher from "@/src/i18nConfig/msgFetcher";
import { Tab, Tabs, TabList, TabPanel, TabPanels, Center } from "@chakra-ui/react";
import React from "react";
import IndexGridComp from "./IndexGridComp";
import { indexGridPics } from "@/public/indexGridPicsSrc";

const TabControl: React.FC = () => {

return (
  <Tabs
    variant='soft-rounded'
    w='100%'
    mt='0'
    align='center'
    h='100%'
  >
    <TabList w='fit-content'  borderRadius='full' boxShadow='base'>
      <Tab
        _selected={{ bg: 'green.300' ,boxShadow: 'base' }}
        minW='30px'
      >
        {messageFetcher('index', 'trending')}
      </Tab>
      <Tab
        _selected={{ bg: 'green.300' ,boxShadow: 'base' }}
        minW='30px'
      >
        {messageFetcher('index', 'latest')}
      </Tab>
      <Tab
        _selected={{ bg: 'green.300' ,boxShadow: 'base' }}
        minW='30px'
      >
        {messageFetcher('index', 'category')}
      </Tab>
    </TabList>
    <TabPanels>
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
