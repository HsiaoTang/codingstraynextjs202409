import { Drawer, DrawerOverlay, DrawerHeader, DrawerContent, Button, Box, Grid, useDisclosure } from '@chakra-ui/react';
import messageFetcher from '@/src/i18nConfig/msgFetcher';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faUserPlus, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import MemberSignUpModal from './MemberSignUpModal';
import MemberLogInModal from './MemberLogInModal';

interface MemberDrawerProps {
  isOpenMemberDrawer: boolean,
  onCloseMemberDrawer: VoidFunction,
}



const MemberDrawer: React.FC<MemberDrawerProps> = ({ isOpenMemberDrawer, onCloseMemberDrawer }) => {
  const { isOpen: isOpenModalSignUp, onOpen: onOpenModalSignUp, onClose: onCloseModalSignUp } = useDisclosure();
  const { isOpen: isOpenModalLogIn, onOpen: onOpenModalLogIn, onClose: onCloseModalLogIn } = useDisclosure();
  const memberFuncs: Array<{ icon: IconDefinition, funcName: string, onOpen: VoidFunction }> = [
    { 
      icon: faRightToBracket,
      funcName: 'log_in',
      onOpen: onOpenModalLogIn
    },
    {
      icon: faUserPlus,
      funcName: 'sign_up',
      onOpen: onOpenModalSignUp
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
        {memberFuncs.map(func => (
          <Button key={func.funcName} borderRadius='0' colorScheme='green' variant='ghost' onClick={func.onOpen}>
            <Grid templateColumns='repeat(2, 1fr)' alignItems='center'>
              <Box bg='red' w='50px'>
                <FontAwesomeIcon icon={func.icon} />
              </Box>
              <Box bg='blue' w='100px' textAlign='start' color='green.900'>
                {messageFetcher('member', func.funcName)}
              </Box>
            </Grid>
          </Button>
        ))}
        <MemberSignUpModal isOpenMemberSignUpModal={isOpenModalSignUp} onCloseMemberSignUpModal={onCloseModalSignUp}></MemberSignUpModal>
        <MemberLogInModal isOpenMemberLogInModal={isOpenModalLogIn} onCloseMemberLogInModal={onCloseModalLogIn}></MemberLogInModal>
      </DrawerContent>
    </Drawer>
  );
};

export default MemberDrawer;