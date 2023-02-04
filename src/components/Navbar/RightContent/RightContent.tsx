import AuthModal from '@/components/Modal/Auth/AuthModal';
import { Flex } from '@chakra-ui/react';
import React from 'react';
import AuthButtons from './AuthButtons';

type Props = {};

//imported from "/src/components/Navbar/SearchInput.tsx"
const RightContent = () => {
  return (
    <>
      <AuthModal />
      <Flex justify='center' align='center'>
        {/* <AuthButtons /> */}
        <AuthButtons />
      </Flex>
    </>
  );
};

export default RightContent;
