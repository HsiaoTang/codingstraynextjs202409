import { Grid, Center } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import IndexBackDrop from './_components/IndexBackDrop';
import TabControl from './_components/TabControl';

export default function Page() {
  const t = useTranslations('index');
  return (
    <Grid
      templateRows='70vh 120vh'
      templateColumns='1fr'
      minH='190vh'
      gap={0}
      background='green.50' 
      boxShadow='content'
      alignItems='center'
    >
        <IndexBackDrop />
        <Center><TabControl /></Center>
    </Grid>
  );
}