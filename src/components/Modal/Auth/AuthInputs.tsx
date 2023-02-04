import { authModalState } from '@/atoms/authModalAtom';
import { Flex } from '@chakra-ui/react';
import React from 'react';
import { useRecoilValue } from 'recoil';
import Login from './Login';
import SignUp from './SignUp';

type AuthInputsProps = {};

const AuthInputs = () => {
  const modalState = useRecoilValue(authModalState);
  return (
    <Flex direction={'column'} width={'100%'} align='center' mt={4}>
      {modalState.view === 'login' && <Login />}
      {modalState.view === 'signup' && <SignUp />}
    </Flex>
  );
};

export default AuthInputs;