import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, useDisclosure } from '@chakra-ui/react';

interface MemberLogInModalProps {
  isOpenMemberLogInModal: boolean,
  onCloseMemberLogInModal: VoidFunction,
}

const MemberLogInModal: React.FC<MemberLogInModalProps> = ({ isOpenMemberLogInModal, onCloseMemberLogInModal }) => {
  return(
    <Modal isOpen={isOpenMemberLogInModal} onClose={onCloseMemberLogInModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onCloseMemberLogInModal}>
            Close
          </Button>
          <Button variant='ghost'>Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default MemberLogInModal;