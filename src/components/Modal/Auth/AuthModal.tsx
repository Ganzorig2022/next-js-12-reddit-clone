import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { authModalState } from '@/atoms/authModalAtom';

import { useRecoilState } from 'recoil';
import AuthInputs from './AuthInputs';
import OAuthButtons from './OAuthButtons';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/clientApp';
import ResetPassword from './ResetPassword';

const AuthModal = () => {
  const [modalState, setModalState] = useRecoilState(authModalState);
  const [user, loading, error] = useAuthState(auth);

  // open modal window
  const toggleView = (view: string) => {
    setModalState({
      ...modalState,
      view: view as typeof modalState.view,
    });
  };

  // close modal window
  const handleClose = () => {
    setModalState((prev) => ({
      ...prev,
      open: false,
    }));
  };

  // if user is logged in, then close modal window
  useEffect(() => {
    if (user) handleClose();
  }, [user]);

  return (
    <>
      <Modal isOpen={modalState.open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent textAlign='center'>
          <ModalHeader>
            {modalState.view === 'login' && 'Login'}
            {modalState.view === 'signup' && 'Signup'}
            {modalState.view === 'resetPassword' && 'Reset Password'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display={'flex'}
            flexDirection='column'
            alignItems={'center'}
            justifyContent='center'
            pb={6}
          >
            <Flex
              direction='column'
              align='center'
              justify='center'
              width={'70%'}
            >
              {modalState.view === 'login' || modalState.view === 'signup' ? (
                <>
                  <OAuthButtons />
                  <Text color='gray.500' fontWeight={700}>
                    OR
                  </Text>
                  <AuthInputs toggleView={toggleView} />
                </>
              ) : (
                <ResetPassword toggleView={toggleView} />
              )}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthModal;
