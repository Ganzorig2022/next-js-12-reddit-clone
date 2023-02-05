import AuthModal from '@/components/Modal/Auth/AuthModal';
import { auth } from '@/firebase/clientApp';
import { Button, Flex } from '@chakra-ui/react';
import { signOut, User } from 'firebase/auth';
import React from 'react';
import AuthButtons from './AuthButtons';
import UserMenu from './UserMenu';
import ActionIcons from './Icons';

type Props = {
  user?: User | null; //firebase user type
};

//imported from "/src/components/Navbar/SearchInput.tsx"
const RightContent = ({ user }: Props) => {
  return (
    <>
      <AuthModal />
      <Flex justify='center' align='center'>
        {/* if user is logged in */}
        {user ? <ActionIcons /> : <AuthButtons />}
        {/* if user is NOT logged in, then show Sign In, Sign Up buttons */}
        <UserMenu user={user} />
      </Flex>
    </>
  );
};

export default RightContent;
