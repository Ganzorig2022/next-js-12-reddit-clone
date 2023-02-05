import { authModalState, ModalView } from '@/atoms/authModalAtom';
import { auth } from '@/firebase/clientApp';
import { FIREBASE_ERRORS } from '@/firebase/error';
import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSetRecoilState } from 'recoil';

type Props = {
  toggleView: (view: ModalView) => void;
};

const Login = ({ toggleView }: Props) => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });
  const [signInWithEmailAndPassword, user, loading, authError] =
    useSignInWithEmailAndPassword(auth);
  const [formError, setFormError] = useState('');

  //firebase logic
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formError) setFormError('');
    if (!loginForm.email.includes('@')) {
      return setFormError('Please enter a valid email');
    }

    signInWithEmailAndPassword(loginForm.email, loginForm.password);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // update form state
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        required
        name='email'
        placeholder='email'
        type='email'
        onChange={onChange}
        mb={2}
        fontSize='10pt'
        _placeholder={{ color: 'gray.500' }}
        _hover={{ bg: 'white', border: '1px solid', borderColor: 'blue.500' }}
        _focus={{
          outline: 'none',
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
        bg='gray.50'
      />
      <Input
        required
        name='password'
        placeholder='password'
        type='password'
        onChange={onChange}
        mb={2}
        fontSize='10pt'
        _placeholder={{ color: 'gray.500' }}
        _hover={{ bg: 'white', border: '1px solid', borderColor: 'blue.500' }}
        _focus={{
          outline: 'none',
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
        bg='gray.50'
      />
      <Text textAlign='center' mt={2} fontSize='10pt' color='red'>
        {formError ||
          FIREBASE_ERRORS[authError?.message as keyof typeof FIREBASE_ERRORS]}
      </Text>
      <Button type={'submit'} width='100%' height='36px' mt={2} mb={2}>
        Log In
      </Button>
      <Flex justifyContent='center' mb={2}>
        <Text fontSize='9pt' mr={1}>
          Forgot your password?
        </Text>
        <Text
          fontSize='9pt'
          color='blue.500'
          cursor='pointer'
          onClick={() => toggleView('resetPassword')}
        >
          Reset
        </Text>
      </Flex>
      <Flex fontSize='9pt' justifyContent='center'>
        <Text mr={1}>New Here?</Text>
        <Text
          color='blue.500'
          fontWeight={700}
          cursor='pointer'
          onClick={() => toggleView('signup')}
        >
          SIGN UP
        </Text>
      </Flex>
    </form>
  );
};

export default Login;
