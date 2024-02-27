import { Center, Grid, Text } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import IndexGridComp from './_components/IndexGridComp';
import IndexBackDrop from './_components/IndexBackDrop';
import { indexGridPics } from '@/public/indexGridPicsSrc';

export default function Page() {
  const t = useTranslations('index');
  return (
    <Grid
      templateRows='repeat(4, 1fr)'
      templateColumns='repeat(1, 1fr)'
      minH='100vh'
      gap={100}
      background='green.50' 
      boxShadow='content'
      alignItems='center'
    >
      <IndexBackDrop />
      <Text></Text>
      <Center><IndexGridComp pics={indexGridPics} /></Center>

    </Grid>
  );
}