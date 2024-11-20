'use client'
import { Drawer, DrawerOverlay, DrawerHeader, DrawerContent, Button, Box, Grid } from '@chakra-ui/react';
import msgFetcher from '@/src/configs/i18n/msgFetcher';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faRightToBracket, faRightFromBracket, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { getKcInstance } from '@/src/configs/keycloak/KeyCloakProvier';
import { getItemFromLocalStorage, setItemToLocalStorage } from '@/src/utils/helpers';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/src/configs/store/store';

interface MemberDrawerProps {
  isOpenMemberDrawer: boolean,
  onCloseMemberDrawer: VoidFunction,
}

const MemberDrawer: React.FC<MemberDrawerProps> = ({ isOpenMemberDrawer, onCloseMemberDrawer }) => {
  // const [authenticated, setAuthenticated] = useState<boolean>(false);
  // useEffect(() => {
  //   const authStatus = getItemFromLocalStorage<boolean>('authenticated', false);
  //   setAuthenticated(authStatus);
  // }, []);
  const authenticated = true;
  
  const memberFuncs: Array<{ icon: IconDefinition, funcName: string, func: () => void, display: boolean }> = [
    {
      icon: faUserPlus,
      funcName: 'sign_up',
      func: () => {
        if(authenticated) {
          getKcInstance('check-sso').register();
        }
      },
      display: (authenticated),
    },
    { 
      icon: faRightToBracket,
      funcName: 'log_in',
      func: async () => {
        if(authenticated) {
          getKcInstance('check-sso').login();
          setItemToLocalStorage<boolean>('authStatusChanging', true);
        }
      },
      display: (authenticated),
    },
    {
      icon: faRightFromBracket,
      funcName: 'log_out',
      func: async () => {
        if(authenticated) {
          getKcInstance('check-sso').logout();
          setItemToLocalStorage<boolean>('authStatusChanging', true);
        }
      },
      display: (authenticated),
    },
  ];
  
  return(
    <Drawer
      size='xs'
      isOpen={isOpenMemberDrawer}
      placement='right'
      onClose={onCloseMemberDrawer}
    > 
      <DrawerOverlay />
      <DrawerContent bg='green.50' maxWidth='200px'>
        <DrawerHeader></DrawerHeader>
        {memberFuncs.map(func => 
        func.display && (
          <Button key={func.funcName} borderRadius='0' colorScheme='green' variant='ghost' onClick={func.func}>
            <Grid templateColumns='repeat(2, 1fr)' alignItems='center'>
              <Box w='50px'>
                <FontAwesomeIcon icon={func.icon} />
              </Box>
              <Box w='100px' textAlign='start' color='green.900'>
                {msgFetcher('member', func.funcName)}
              </Box>
            </Grid>
          </Button>
        ))}
      </DrawerContent>
    </Drawer>
  );
}

export default MemberDrawer;