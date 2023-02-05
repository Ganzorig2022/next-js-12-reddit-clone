import { authModalState, ModalView } from '@/atoms/authModalAtom';
import { Flex } from '@chakra-ui/react';
import React from 'react';
import { useRecoilValue } from 'recoil';
import Login from './Login';
import SignUp from './SignUp';

type Props = {
  toggleView: (view: ModalView) => void;
};

const AuthInputs = ({ toggleView }: Props) => {
  const modalState = useRecoilValue(authModalState);

  return (
    <Flex direction={'column'} width={'100%'} align='center' mt={4}>
      {modalState.view === 'login' && <Login toggleView={toggleView} />}
      {modalState.view === 'signup' && <SignUp toggleView={toggleView} />}
    </Flex>
  );
};

export default AuthInputs;
