import React from 'react';
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Icon,
  Flex,
  MenuDivider,
  Box,
  Text,
} from '@chakra-ui/react';
import { signOut, User } from 'firebase/auth';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { TiHome } from 'react-icons/ti'; //vs code icons
import { FaRedditSquare } from 'react-icons/fa'; //font-awespme
import { CgProfile } from 'react-icons/cg'; // css-gg
import { MdOutlineLogin } from 'react-icons/md';
import { IoSparkles } from 'react-icons/io5';
import { auth } from '@/firebase/clientApp';
import { useRecoilState } from 'recoil';
import { authModalState } from '@/atoms/authModalAtom';
import { useAuthState } from 'react-firebase-hooks/auth';

type Props = {
  user?: User | null; //firebase user type
};

const UserMenu = ({ user }: Props) => {
  const [authModal, setModalState] = useRecoilState(authModalState);
  //   const [user] = useAuthState(auth);

  return (
    <Menu>
      <MenuButton
        cursor='pointer'
        padding='0px 6px'
        borderRadius={4}
        mr={2}
        ml={{ base: 0, md: 2 }}
        _hover={{ outline: '1px solid', outlineColor: 'gray.200' }}
      >
        <Flex
          align='center'
          justify='space-between'
          width={{ base: 'auto', lg: '200px' }}
        >
          <Flex align='center'>
            <Icon as={TiHome} mr={{ base: 1, md: 2 }} />
            <Flex display={{ base: 'none', lg: 'flex' }}>
              <Text fontWeight={600} fontSize='10pt'>
                Home
              </Text>
            </Flex>
          </Flex>
          <ChevronDownIcon color='gray.500' />
        </Flex>
      </MenuButton>
      <MenuList>{/* <Communities/> */}</MenuList>
    </Menu>
  );
};

export default UserMenu;
