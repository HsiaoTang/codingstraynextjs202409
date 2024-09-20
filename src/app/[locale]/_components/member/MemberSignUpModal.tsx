import messageFetcher from '@/src/i18nConfig/msgFetcher';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Image, Text, Center, Input, FormControl, FormLabel, FormErrorMessage, Select, Textarea } from '@chakra-ui/react';
import { useState } from 'react';
import { useLocale } from 'next-intl';

interface MemberSignUpModalProps {
  isOpenMemberSignUpModal: boolean,
  onCloseMemberSignUpModal: VoidFunction,
}


const MemberSignUpModal: React.FC<MemberSignUpModalProps> = ({ isOpenMemberSignUpModal, onCloseMemberSignUpModal }) => {
  const memberSignUpInfo: Array<string> = [ 'nickname', 'username', 'password', 'birthday', 'gender', 'picture', 'about' ];
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [passwordErrMsg, setPasswordErrMsg] = useState<string[]>([]);
  const isErrorPassword: boolean = passwordErrMsg.length > 0;
  const handlePasswordInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    setPasswordInput(e.target.value);
    const isLengthValid = e.target.value.length > 8;
    const hasUpperCase = /[A-Z]/.test(e.target.value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(e.target.value);
    
    let errMsg: string[] = [];
    if (!isLengthValid) {
      errMsg.push('The length of password should be greater than 8.');
    }
    if (!hasUpperCase) {
      errMsg.push('There should be at least one uppercase letter.');
    }
    if (!hasSpecialChar) {
      errMsg.push('There should be at least one special character.');
    }
    setPasswordErrMsg(errMsg);
  };

  const currentLocale: string = useLocale();

  console.log(currentLocale);

  return(
    <Modal isOpen={isOpenMemberSignUpModal} onClose={onCloseMemberSignUpModal}>
      <ModalOverlay />
      <ModalContent bg='green.100'>
        <ModalHeader>
          <Center>
            <Image
              mr='2'
              src='/imgs/logo/codingstray-website-favicon-color.png'
              minW='40px' 
              boxSize='40px' 
            />
            <Text color='green.900'>{messageFetcher('index', 'title')}</Text>
          </Center>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {memberSignUpInfo.map((info, index) => {
            switch (info) {
              case 'password':
                return(
                  <FormControl 
                    mt='5' 
                    key={`${info}-${index}`} 
                    isRequired  
                    isInvalid={isErrorPassword}
                  >
                    <FormLabel>{messageFetcher('member', info)}</FormLabel>
                    <Input 
                      type={info}
                      value={passwordInput}
                      focusBorderColor='green.50' 
                      bg='green.50'
                      onChange={handlePasswordInputChange}
                    ></Input>
                    {!isErrorPassword? (
                      null
                    ): (
                      passwordErrMsg.map((errMsg, idx) => (
                        <FormErrorMessage key={idx}>{errMsg}</FormErrorMessage>
                      ))
                    )}
                  </FormControl>
                );
              case 'birthday':
                return(
                  <FormControl mt='5' key={`${info}-${index}`} isRequired>
                    <FormLabel>{messageFetcher('member', info)}</FormLabel>
                    <Input 
                      type='date'
                      focusBorderColor='green.50' 
                      bg='green.50'
                    ></Input>
                  </FormControl>
                );
              case 'gender':
                return(
                  <FormControl mt='5' key={`${info}-${index}`} isRequired>
                    <FormLabel>{messageFetcher('member', info)}</FormLabel>
                    <Select 
                      placeholder={messageFetcher('member', 'select_gender')} 
                      focusBorderColor='green.50' 
                      bg='green.50'
                    >
                      <option>{messageFetcher('member', 'male')}</option>
                      <option>{messageFetcher('member', 'female')}</option>
                    </Select>
                  </FormControl>
                );
              case 'gender':
                return(
                  <FormControl mt='5' key={`${info}-${index}`} isRequired>
                    <FormLabel>{messageFetcher('member', info)}</FormLabel>
                    <Select 
                      placeholder={messageFetcher('member', 'select_gender')} 
                      focusBorderColor='green.50' 
                      bg='green.50'
                    >
                      <option>{messageFetcher('member', 'male')}</option>
                      <option>{messageFetcher('member', 'female')}</option>
                    </Select>
                  </FormControl>
                );
              case 'picture':
                return(
                  <FormControl mt='5' key={`${info}-${index}`} isRequired>
                    <FormLabel>{messageFetcher('member', info)}</FormLabel>
                    <Input type='file' focusBorderColor='green.50' bg='green.50'></Input>
                  </FormControl>
                );
              case 'about':
                return(
                  <FormControl mt='5' key={`${info}-${index}`} isRequired>
                    <FormLabel>{messageFetcher('member', info)}</FormLabel>
                    <Textarea 
                      placeholder={messageFetcher('member', 'about_user')} 
                      focusBorderColor='green.50' 
                      bg='green.50'
                    ></Textarea>
                  </FormControl>
                );
              default:
                return(
                  <FormControl mt='5' key={`${info}-${index}`} isRequired>
                    <FormLabel>{messageFetcher('member', info)}</FormLabel>
                    <Input type={info} focusBorderColor='green.50' bg='green.50'></Input>
                  </FormControl>
                );
            };
          })}
        </ModalBody>
        <ModalFooter justifyContent='center'>
          <Button colorScheme='green' variant='solid' mr={3} onClick={onCloseMemberSignUpModal}>
            {messageFetcher('member', 'sign_up')}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default MemberSignUpModal;